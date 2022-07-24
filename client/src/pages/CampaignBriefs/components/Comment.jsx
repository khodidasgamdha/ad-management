import {
    useToast,
    FormControl,
    FormLabel,
    Textarea,
    Button,
    css
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import instance from "../../../helpers/axios";

export const Comment = ({ clientid, campaignId }) => {
    const toast = useToast();

    const validationSchema = Yup.object({
        comment: Yup.string().required().label("Comment"),
    });

    return (
        <Formik
            enableReinitialize
            initialValues={{ comment: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                await instance({
                    method: "POST",
                    url: `/client/${clientid}/campaign-brief/${campaignId}/comment`,
                    withCredentials: true,
                    data: {
                        content: values.comment,
                        users: [clientid]
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
                                marginTop: "50px"
                            })}
                        >
                            Comments
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
                                height: "200px",
                                marginBottom: "10px"
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
    );
};
