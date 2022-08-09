import {
    Button,
    HStack,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
    CheckboxContainer,
    CheckboxControl,
    SubmitButton,
} from "formik-chakra-ui";
import validationSchema from "../../../validations/User/CreateUser";
import ChakraModal from "../../../components/ChakraModal";
import InputBox from "../../../components/InputBox";
import { Roles } from "../../../constant";
import instance from "../../../helpers/axios";
import { useGetClientList } from "../../../hooks/clients/useGetClientList";
import { userModelInitialValues } from "../constant/InitialValues"

const CreateUserModal = ({ isOpen, onClose }) => {
    const toast = useToast();
    const { data } = useGetClientList();

    const onSubmit = async (values, actions) => {
        await instance({
            method: "POST",
            url: "/user",
            data: values,
        })
            .then((response) => {
                toast({
                    isClosable: true,
                    status: "success",
                    variant: "top-accent",
                    position: "top-right",
                    title: "Success",
                    description: response.data?.data?.message || "Success!",
                });
                actions.resetForm();
                onClose();
            })
            .catch((error) => {
                toast({
                    isClosable: true,
                    title: "Error",
                    status: "error",
                    variant: "top-accent",
                    position: "top-right",
                    description: error.response.data.message,
                });
            });
    };

    return (
        <ChakraModal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", md: "2xl" }}
        >
            <ModalContent>
                <ModalHeader>Create User</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={0}>
                    <Formik
                        initialValues={userModelInitialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ dirty, isValid, isSubmitting }) => (
                            <Form autoComplete="off">
                                <VStack alignItems="stretch" spacing={4}>
                                    <InputBox
                                        name="name"
                                        label="Name"
                                        type="text"
                                    />
                                    <InputBox
                                        name="email"
                                        label="Email address"
                                        type="email"
                                    />
                                    <InputBox
                                        name="password"
                                        label="Password"
                                        type="password"
                                    />
                                    <CheckboxContainer
                                        stackProps={{
                                            direction: "row",
                                            spacing: 5,
                                            padding: 0,
                                        }}
                                        name="roles"
                                        label="Roles"
                                    >
                                        {Roles.map((role) => (
                                            <CheckboxControl
                                                key={role.id}
                                                colorScheme="blue"
                                                name="roles"
                                                id={role.value}
                                                value={role.value}
                                            >
                                                {role.title}
                                            </CheckboxControl>
                                        ))}
                                    </CheckboxContainer>
                                    <CheckboxContainer
                                        stackProps={{
                                            direction: "row",
                                            spacing: 5,
                                            padding: 0,
                                        }}
                                        name="clients"
                                        label="Clients"
                                    >
                                        {data?.clients.map((client) => (
                                            <CheckboxControl
                                                key={client.id}
                                                colorScheme="blue"
                                                name="clients"
                                                id={client.id}
                                                value={client.id}
                                            >
                                                {client.name}
                                            </CheckboxControl>
                                        ))}
                                    </CheckboxContainer>
                                </VStack>
                                <ModalFooter px={0}>
                                    <HStack>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            colorScheme="red"
                                            onClick={onClose}
                                        >
                                            Close
                                        </Button>
                                        <SubmitButton
                                            size="sm"
                                            disabled={
                                                !(dirty && isValid) ||
                                                isSubmitting
                                            }
                                            colorScheme="blue"
                                        >
                                            Create user
                                        </SubmitButton>
                                    </HStack>
                                </ModalFooter>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    );
};

export default CreateUserModal;
