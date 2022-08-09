import {
    Divider,
    Grid,
    GridItem,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import validationSchema from "../../validations/Setting/Password";
import { useChangePassword } from "../../hooks/users/useChangePassword";
import { passwordInitialValue } from "./constant/InititalValues"

const PasswordUpdate = () => {
    const toast = useToast();
    var { mutateAsync } = useChangePassword();

    const onSubmit = async (values, actions) => {
        await mutateAsync(
            {
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                confirmPassword: values.confirmNewPassword,
            },
            {
                onSuccess: (data, variables, context) => {
                    toast({
                        isClosable: true,
                        status: "success",
                        variant: "top-accent",
                        position: "top-right",
                        title: "Success",
                        description: data.message,
                    });
                    actions.resetForm();
                },
            }
        );
    };

    return (
        <Formik
            initialValues={passwordInitialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <VStack autoComplete="off" as={Form} align="stretch">
                <VStack align="stretch" spacing={0}>
                    <Text fontWeight="600">Password</Text>
                    <Text color="gray">
                        Please enter your current password to change your
                        password.
                    </Text>
                </VStack>
                <Divider />
                <VStack align="stretch" spacing={6}>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        alignItems="center"
                        columns={2}
                    >
                        <GridItem
                            colSpan={{ base: 4, lg: 1 }}
                            mb={{ base: 3, lg: 0 }}
                        >
                            <Text>Current password</Text>
                        </GridItem>
                        <GridItem colSpan={{ base: 4, lg: 3 }}>
                            <InputControl
                                name="currentPassword"
                                inputProps={{
                                    type: "password",
                                    variant: "filled",
                                }}
                            />
                        </GridItem>
                    </Grid>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        alignItems="center"
                        columns={2}
                    >
                        <GridItem
                            colSpan={{ base: 4, lg: 1 }}
                            mb={{ base: 3, lg: 0 }}
                        >
                            <Text>New password</Text>
                        </GridItem>
                        <GridItem colSpan={{ base: 4, lg: 3 }}>
                            <InputControl
                                name="newPassword"
                                inputProps={{
                                    type: "password",
                                    variant: "filled",
                                }}
                            />
                        </GridItem>
                    </Grid>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        alignItems="center"
                        columns={2}
                    >
                        <GridItem
                            colSpan={{ base: 4, lg: 1 }}
                            mb={{ base: 3, lg: 0 }}
                        >
                            <Text>Confirm new password</Text>
                        </GridItem>
                        <GridItem colSpan={{ base: 4, lg: 3 }}>
                            <InputControl
                                name="confirmNewPassword"
                                inputProps={{
                                    type: "password",
                                    variant: "filled",
                                }}
                            />
                        </GridItem>
                    </Grid>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        alignItems="center"
                        columns={2}
                    >
                        <GridItem colSpan={{ base: 4, lg: 1 }}></GridItem>
                        <GridItem colSpan={{ base: 4, lg: 3 }}>
                            <SubmitButton
                                size="sm"
                                colorScheme="blue"
                                px="14"
                                rounded="full"
                            >
                                Update Password
                            </SubmitButton>
                        </GridItem>
                    </Grid>
                </VStack>
            </VStack>
        </Formik>
    );
};

export default PasswordUpdate;
