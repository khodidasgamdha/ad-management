import {
    useToast,
    FormControl,
    FormLabel,
    Textarea,
    Button,
    css,
    Box,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import * as Yup from "yup";
import { profile } from "../../../atoms/authAtom";
import instance from "../../../helpers/axios";
import { useGetClientUsers } from "../../../hooks/campaign-briefs/useGetClientUsers";
import { useGetComments } from "../../../hooks/campaign-briefs/useGetComments";

export const Comment = ({ clientid, campaignId }) => {
    const toast = useToast();

    const [clientUsers, setClientUsers] = useState([]);

    const validationSchema = Yup.object({
        comment: Yup.string().required().label("Comment"),
    });

    const {
        access_info: { clients },
    } = useRecoilValue(profile);

    const { data } = useGetClientUsers(clients[0]?.id);
    const { mutate, data: comments } = useGetComments();

    useEffect(() => {
        if (clientid && campaignId) {
            mutate({
                clientId: clientid,
                campaignId: campaignId,
            });
        }
    }, [clientid, campaignId]);

    useEffect(() => {
        const ids = data?.users?.length ? data?.users.map((el) => el.id) : [];
        setClientUsers(ids);
    }, [data]);

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{ comment: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    await instance({
                        method: "POST",
                        url: `/client/${clientid}/campaign-brief/${campaignId}/comment`,
                        withCredentials: false,
                        data: {
                            content: values.comment,
                            users: clientUsers,
                        },
                    })
                        .then((res) => {
                            if (res.status === 200) {
                                toast({
                                    isClosable: true,
                                    status: "success",
                                    variant: "top-accent",
                                    position: "top-right",
                                    title: "Success",
                                    description: res.data.message,
                                });
                                values.comment = "";
                                mutate({
                                    clientId: clientid,
                                    campaignId: campaignId,
                                });
                            }
                        })
                        .catch((error) => {
                            toast({
                                isClosable: true,
                                status: "error",
                                variant: "top-accent",
                                position: "top-right",
                                description: error.response.data.message,
                            });
                        });
                }}
            >
                {({ dirty, isValid, isSubmitting, values, handleChange }) => (
                    <Form autoComplete="off">
                        <FormControl>
                            <FormLabel
                                htmlFor="comment"
                                css={css({
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    lineHeight: "15px",
                                    marginTop: "20px",
                                })}
                            >
                                Add Comment
                            </FormLabel>
                            <Textarea
                                id="comment"
                                name="comment"
                                placeholder="Comment..."
                                value={values.comment}
                                onChange={handleChange}
                                css={css({
                                    borderRadius: "10px",
                                    border: "2px solid #757998",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    color: "#757998",
                                    height: "100px",
                                    marginBottom: "10px",
                                })}
                            />
                        </FormControl>
                        <Button
                            size="sm"
                            type="submit"
                            disabled={!(dirty && isValid) || isSubmitting}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <Box
                style={{
                    marginTop: 10,
                    overflowY: "auto",
                    height: "calc(100vh - 420px)",
                }}
            >
                {comments?.comments
                    ?.sort((a, b) => {
                        if (a.created_at < b.created_at) return 1;
                        if (a.created_at > b.created_at) return -1;
                        return 0;
                    })
                    ?.map((el, index) => (
                        <Box
                            key={index}
                            border="2px solid"
                            borderRadius={10}
                            borderColor="blue.300"
                            w="100%"
                            p={3}
                            mt={2}
                        >
                            <Box display="flex">
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    textTransform="uppercase"
                                    fontSize="12px"
                                    maxWidth="18%"
                                >
                                    {el?.user?.name}
                                </Box>
                                <Box width="58%" px={2} fontSize="14px">
                                    {el?.content}
                                </Box>
                                <Box fontSize="12px" color="gray.500">
                                    <Box>
                                        {moment(el?.created_at).format(
                                            "MMMM DD YYYY"
                                        )}
                                    </Box>
                                    <Box>
                                        {moment(el?.created_at).format(
                                            "h:mm a"
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
            </Box>
        </>
    );
};
