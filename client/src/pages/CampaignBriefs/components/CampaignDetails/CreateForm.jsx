import { HStack, useToast, VStack, Button, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import instance from "../../../../helpers/axios";
import AdditionalQuestions from "./AdditionalQuestions";
import CampaignBudget from "./CampaignBudget";
import CampaignDetails from "./CampaignDetails";
import CampaignMetrics from "./CampaignMetrics";
import ClientDetails from "./ClientDetails";
import Demographics from "./Demographics";
import MediaStrategies from "./MediaStrategies";
import validationSchema from "../../../../validations/CampaignBrief/CampaignForm";
import { campaignInitialValue } from "../../constant/InitialValues";
import { updateCampaignFbObjective } from "../../../../store/campaign/campaignThunk";
import { useDispatch } from "react-redux";

const CreateForm = ({ id, clientDetails, campaignDetails }) => {
    const toast = useToast();
    const dispatch = useDispatch()
    const [method, setMethod] = useState();
    const [url, setURL] = useState();
    const [fbObjective, setFbObjective] = useState();

    useEffect(() => {
        if (id && clientDetails?.id) {
            setMethod("PUT");
            setURL(`/client/${clientDetails.id}/campaign-brief/${id}`);
        } else {
            setMethod("POST");
            setURL(`/client/${clientDetails.id}/campaign-brief`);
        }
    }, [id, clientDetails]);

    useEffect(() => {
        if(fbObjective) {
            dispatch(updateCampaignFbObjective(fbObjective));
        }
    }, [fbObjective])

    return (
        <Formik
            enableReinitialize
            initialValues={campaignInitialValue(clientDetails, campaignDetails)}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                await instance({
                    method: method,
                    url: url,
                    withCredentials: false,
                    data: values,
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setFbObjective(values?.detail?.objective)
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
                    <ClientDetails />
                    <CampaignDetails
                        setFieldValue={setFieldValue}
                        values={values}
                    />
                    <CampaignBudget
                        setFieldValue={setFieldValue}
                        values={values}
                    />
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
