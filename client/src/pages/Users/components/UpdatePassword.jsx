import { HStack, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import validationSchema from "../../../validations/User/UpdatePassword";
import { SubmitButton } from "formik-chakra-ui";
import instance from "../../../helpers/axios";
import SuccessModal from "../../../components/PopupModal/SuccessModal";
import ErrorModal from "../../../components/PopupModal/ErrorModal";
import { useState } from "react";
import InputBox from "../../../components/InputBox";
import { passwordInitialValues } from "../constant/InitialValues"

const UpdatePassword = () => {
    const { id } = useParams();

    const [isSuccessModalOpen, setSuccessModal] = useState(false);
    const [isErrorModalOpen, setErrorModal] = useState(false);
    const [description, setDescription] = useState("");

    const onSubmit = async (values, action) => {
        await instance({
            method: "PUT",
            url: `/user/${id}/password`,
            data: values,
            withCredentials: false,
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    action.setSubmitting(false);
                    action.resetForm();
                    setSuccessModal(true);
                }
            })
            .catch((error) => {
                setDescription(error.response.data.message);
                setErrorModal(true);
            });
    };

    return (
        <>
            <Formik
                initialValues={passwordInitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, dirty, isValid, isSubmitting, handleChange }) => (
                    <Form>
                        <VStack alignItems="stretch" spacing={6}>
                            <HStack gap={4} w="full">
                                <InputBox
                                    label="New password"
                                    name="newPassword"
                                    type="password"
                                    value={values.newPassword}
                                    onChange={handleChange}
                                />
                                <InputBox
                                    label="Confirm password"
                                    name="confirmPassword"
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                />
                            </HStack>
                            <HStack>
                                <SubmitButton
                                    disabled={
                                        !(dirty && isValid) || isSubmitting
                                    }
                                    size="sm"
                                    colorScheme="blue"
                                    px="14"
                                    rounded="full"
                                >
                                    Update password
                                </SubmitButton>
                            </HStack>
                        </VStack>
                    </Form>
                )}
            </Formik>

            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setSuccessModal(false)}
            />
            <ErrorModal
                isOpen={isErrorModalOpen}
                onClose={() => setErrorModal(false)}
                description={description}
            />
        </>
    );
};

export default UpdatePassword;
