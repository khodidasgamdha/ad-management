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
import { useEffect } from "react";
import { useState } from "react";
import instance from "../../../../../helpers/axios";
import { useGetClientUsers } from "../../../../../hooks/campaign-briefs/useGetClientUsers";
import { useGetFacebookAdComments } from "../../../../../hooks/campaign-briefs/useGetComments";
import { CommentsList } from "../../Comments/CommentsList";
import validationSchema from "../../../../../validations/CampaignBrief/Comments"
import { commentInitialValue } from "../../../constant/InitialValues";

export const Comments = ({ clientId, campaignId, facebookAdId }) => {
    const toast = useToast();
    const [clientUsers, setClientUsers] = useState([]);

    const { data } = useGetClientUsers(clientId);
    const { mutate, data: comments } = useGetFacebookAdComments();

    useEffect(() => {
        const ids = data?.users?.length ? data?.users.map((el) => el.id) : [];
        setClientUsers(ids);
    }, [data]);

    useEffect(() => {
        if (clientId) {
            mutate({
                clientId: clientId,
                campaignId: campaignId,
                facebookAdId: facebookAdId,
            });
        }
    }, [clientId]);

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={commentInitialValue}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    await instance({
                        method: "POST",
                        url: `/client/${clientId}/campaign-brief/${campaignId}/ad-upload/${facebookAdId}/comment`,
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
                                    clientId: clientId,
                                    campaignId: campaignId,
                                    facebookAdId: facebookAdId,
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
                            <FormLabel color="gray" fontSize="lg">
                                Your Comment
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
                                    height: "150px",
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
            <Box mt={10}>
                <CommentsList data={comments?.comments} />
            </Box>
        </>
    );
};
