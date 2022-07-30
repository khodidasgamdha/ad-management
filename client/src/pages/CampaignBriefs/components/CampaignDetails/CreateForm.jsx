import { HStack, useToast, VStack, Button, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import instance from "../../../../helpers/axios";
import { initialValue } from "../../constant";
import AdditionalQuestions from "./AdditionalQuestions";
import CampaignBudget from "./CampaignBudget";
import CampaignDetails from "./CampaignDetails";
import CampaignMetrics from "./CampaignMetrics";
import ClientDetails from "./ClientDetails";
import Demographics from "./Demographics";
import MediaStrategies from "./MediaStrategies";

const CreateForm = ({ id, clientDetails }) => {
    const toast = useToast();

    const [method, setMethod] = useState();
    const [url, setURL] = useState();

    useEffect(() => {
        if (id) {
            setMethod("PUT");
            setURL(`/client/${clientDetails.id}/campaign-brief/${id}`);
        } else {
            setMethod("POST");
            setURL(`/client/${clientDetails.id}/campaign-brief`);
        }
    }, [id, clientDetails]);

    const validationSchema = Yup.object({
        name: Yup.string().required().label("Name"),
        startDate: Yup.string().required().label("Start date"),
        endDate: Yup.string().required().label("End date"),
        detail: Yup.object({
            industryBasic: Yup.object({
                companyName: Yup.string().required().label("Company name"),
                phone: Yup.string()
                    .required()
                    .min(10)
                    .max(13)
                    .label("Phone number"),
            })
                .required()
                .label("Industry Basic"),
        })
            .required()
            .label("Details"),
    });

    return (
        <Formik
            enableReinitialize
            initialValues={initialValue(clientDetails)}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                await instance({
                    method: method,
                    url: url,
                    withCredentials: true,
                    data: values,
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
            {({ values, errors, setFieldValue, resetForm }) => (
                <VStack as={Form} mt={4} align="stretch" spacing={6}>
                    {/* <pre>{JSON.stringify({ values, errors }, null, 2)}</pre> */}
                    <ClientDetails />
                    <CampaignDetails
                        setFieldValue={setFieldValue}
                        values={values}
                    />
                    <CampaignBudget />
                    <CampaignMetrics />
                    <Demographics
                        setFieldValue={setFieldValue}
                        values={values}
                    />
                    <MediaStrategies
                        setFieldValue={setFieldValue}
                        values={values}
                    />
                    <AdditionalQuestions
                        setFieldValue={setFieldValue}
                        values={values}
                    />

                    <Stack direction="row" justifyContent="flex-end">
                        {/* Cancle button Start */}
                        <HStack align="center" justifyContent="flex-end">
                            <Button
                                type="reset"
                                px="14"
                                rounded="full"
                                colorScheme="red"
                                size="sm"
                            >
                                Cancle
                            </Button>
                        </HStack>
                        {/* Submit button End */}

                        {/* Cancle button Start */}
                        <HStack align="center" justifyContent="flex-end">
                            <Button
                                type="submit"
                                px="14"
                                rounded="full"
                                colorScheme="blue"
                                size="sm"
                            >
                                {id ? "Update" : "Create"}
                            </Button>
                        </HStack>
                        {/* Submit button End */}
                    </Stack>
                </VStack>
            )}
        </Formik>
    );
};

export default CreateForm;
