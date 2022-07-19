import { HStack, useToast, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SubmitButton } from "formik-chakra-ui";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import * as Yup from "yup";
import { profile } from "../../../atoms/authAtom";
import instance from "../../../helpers/axios";
import { initialValue } from "../constant";
import AdditionalQuestions from "./AdditionalQuestions";
import CampaignBudget from "./CampaignBudget";
import CampaignDetails from "./CampaignDetails";
import CampaignMetrics from "./CampaignMetrics";
import ClientDetails from "./ClientDetails";
import Demographics from "./Demographics";
import MediaStrategies from "./MediaStrategies";

const CreateForm = ({ clientDetails }) => {
  const toast = useToast();
  const { id } = useParams();

  const {
    access_info: { clients },
  } = useRecoilValue(profile);

  const validationSchema = Yup.object({
    name: Yup.string().required().label("Name"),
    startDate: Yup.string().required().label("Start date"),
    endDate: Yup.string().required().label("End date"),
    detail: Yup.object({
      industryBasic: Yup.object({
        companyName: Yup.string().required().label("Company name"),
        phone: Yup.string().required().min(10).max(13).label("Phone number"),
      })
        .required()
        .label("Industry Basic"),
    })
      .required()
      .label("Details"),
  });

  useEffect(() => {
    console.log(id);
    if (id) {

    }
  });

  // useEffect(async () => {
  //   // if (id) {
  //   //   await instance({
  //   //     method: "GET",
  //   //     url: `/client/${clients?.[0]?.id}/campaign-brief/${id}`,
  //   //   })
  //   //     .then((res) => {
  //   //       console.log(res);
  //   //     })
  //   //     .catch((err) => {
  //   //       console.log(err);
  //   //     });
  //   // }
  // }, [clientDetails, clients]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValue(clientDetails)}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await instance({
          method: "POST",
          url: `/client/${clientDetails.id}/campaign-brief`,
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
          <CampaignDetails />
          <CampaignBudget />
          <CampaignMetrics />
          <Demographics setFieldValue={setFieldValue} values={values} />
          <MediaStrategies setFieldValue={setFieldValue} values={values} />
          <AdditionalQuestions setFieldValue={setFieldValue} values={values} />

          {/* Submit button Start */}
          {/* <HStack w="full" align="center" justifyContent="flex-end">
            <SubmitButton
              type="submit"
              px="14"
              rounded="full"
              colorScheme="blue"
              size="sm"
            >
              Update
            </SubmitButton>
          </HStack> */}
          {/* Submit button End */}
        </VStack>
      )}
    </Formik>
  );
};

export default CreateForm;
