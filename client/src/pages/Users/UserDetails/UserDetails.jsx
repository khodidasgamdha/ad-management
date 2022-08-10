import { Roles, States } from "../../../constant";
import { useGetUserDetails } from "../../../hooks/users/useGetUserDetails";
import UpdatePassword from "../components/UpdatePassword";
import { useGetClientList } from "../../../hooks/clients/useGetClientList";
import { useNavigate, useParams } from "react-router-dom";
import {
    Avatar,
    Box,
    Center,
    css,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    HStack,
    // IconButton,
    Radio,
    RadioGroup,
    Text,
    VStack,
} from "@chakra-ui/react";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { BiArrowBack } from "react-icons/bi";
// import Upload from "rc-upload";
// import { HiCamera } from "react-icons/hi";
import { Form, Formik } from "formik";
import InputBox from "../../../components/InputBox";
import { SubmitButton } from "formik-chakra-ui";
import { useEffect, useState } from "react";
import instance from "../../../helpers/axios";
import SuccessModal from "../../../components/PopupModal/SuccessModal";
import ErrorModal from "../../../components/PopupModal/ErrorModal";
import editValidationSchema from "../../../validations/User/UserDetails";
import createValidationSchema from "../../../validations/User/CreateUser";
import { userDetailInitialValues } from "../constant/InitialValues";
import MultiSelectInputBox from "../../../components/MultiSelectInputBox";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isSuccessModalOpen, setSuccessModal] = useState(false);
    const [isErrorModalOpen, setErrorModal] = useState(false);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("POST");
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState(null);
    const [selectedClients, setSelectedClients] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);

    const { data: clients } = useGetClientList();
    const { data, refetch } = useGetUserDetails(id);

    useEffect(() => {
        if (data?.state) {
            setStatus(data.state);
        }
        if (data?.access_info?.clients?.length) {
            setSelectedClients(
                data.access_info.clients.map((el) => {
                    return { value: el.id, label: el.name };
                })
            );
        }
        if (data?.access_info?.roles?.length) {
            setSelectedRoles(
                data.access_info.roles.map((el) => {
                    const id = Roles.filter(e => e.value === el)
                    return { value: el, label: id?.[0]?.title };
                })
            );
        }
    }, [data]);

    useEffect(() => {
        if (id) {
            setType("PUT");
            setUrl(`/user/${id}`);
        } else {
            setType("POST");
            setUrl("/user");
        }
    }, [id]);

    useEffect(() => {
        refetch()
    }, [])

    return (
        <>
            <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                <GridItem w="full" colSpan={{ base: 6, lg: 6 }}>
                    <Heading fontSize="sm" mb={3} color={TEXT_COLOR}>
                        <Flex
                            onClick={() => navigate("/users")}
                            cursor={"pointer"}
                        >
                            <Center marginRight={2}>
                                <BiArrowBack color="#A7A9BD" />
                            </Center>
                            <Center>
                                <Text
                                    css={css({
                                        fontWeight: "600",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                        color: "#A7A9BD",
                                    })}
                                >
                                    Back to Users
                                </Text>
                            </Center>
                        </Flex>
                    </Heading>
                </GridItem>
                <GridItem
                    w="full"
                    colSpan={{ base: 6, lg: 6 }}
                    mb={{ base: 3, lg: 0 }}
                >
                    <Heading fontSize="4xl" mb={7} color={TEXT_COLOR}>
                        {id ? "User Details" : "Add New User"}
                    </Heading>
                </GridItem>
            </Grid>
            <HStack my={6} spacing={10} align={"start"}>
                <Box pos="relative">
                    <Avatar
                        size="2xl"
                        src={
                            data?.other_info?.profile_pic_url &&
                            `${process.env.REACT_APP_API_URL}/uploads/${data?.other_info?.profile_pic_url}`
                        }
                        name={data?.name}
                    />
                    {/* <Upload>
                        <IconButton
                            pos="absolute"
                            right={0}
                            bottom={0}
                            variant="solid"
                            rounded="full"
                            colorScheme="blackAlpha"
                            aria-label="Search database"
                            icon={<HiCamera />}
                        />
                    </Upload> */}
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={userDetailInitialValues(data)}
                    validationSchema={id ? editValidationSchema : createValidationSchema}
                    onSubmit={async (values, actions) => {
                        let payload;
                        if (id) {
                            payload = {
                                name: values.name,
                                email: values.email,
                                roles: selectedRoles.map((el) => el.value),
                                clients: selectedClients.map((el) => el.value),
                                state: status
                            };
                        } else {
                            payload = {
                                name: values.name,
                                email: values.email,
                                password: values.password,
                                roles: selectedRoles.map((el) => el.value),
                                clients: selectedClients.map((el) => el.value),
                                state: status
                            };
                        }
                        await instance({
                            method: type,
                            url: url,
                            data: payload,
                        })
                            .then((response) => {
                                if (response.status === 200) {
                                    setSuccessModal(true);
                                }
                            })
                            .catch((error) => {
                                setDescription(error.response.data.message);
                                setErrorModal(true);
                            });
                    }}
                >
                    {({ values, errors, handleChange }) => {console.log(values);return(
                        <VStack as={Form} w="70%" align={"start"} spacing={4}>
                            <InputBox
                                name="name"
                                label="Full Name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <InputBox
                                name="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {!id && (
                                <InputBox
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            )}
                            <HStack gap={4} w="full">
                                <MultiSelectInputBox
                                    label="Roles"
                                    name="roles"
                                    value={selectedRoles}
                                    options={Roles?.map((el) => {
                                        return {
                                            label: el.title,
                                            value: el.value,
                                        };
                                    })}
                                    placeholder={`-- Select One --`}
                                    onChange={(e) =>
                                        setSelectedRoles(e.map((v) => v))
                                    }
                                />
                                <MultiSelectInputBox
                                    label="Clients"
                                    name="clients"
                                    value={selectedClients}
                                    options={clients?.clients?.map((el) => {
                                        return {
                                            label: el.name,
                                            value: el.id,
                                        };
                                    })}
                                    placeholder={`-- Select One --`}
                                    onChange={(e) =>
                                        setSelectedClients(e.map((v) => v))
                                    }
                                />
                            </HStack>
                            <HStack spacing={4} w="full">
                                <FormControl as="fieldset">
                                    <FormLabel
                                        as="legend"
                                        color="gray"
                                        fontSize="sm"
                                    >
                                        Status
                                    </FormLabel>
                                    <RadioGroup
                                        value={status}
                                        onChange={setStatus}
                                        name="status"
                                    >
                                        <HStack spacing="24px">
                                            {States.map((el) => (
                                                <Radio
                                                    key={el.id}
                                                    value={el.value}
                                                >
                                                    {el.title}
                                                </Radio>
                                            ))}
                                        </HStack>
                                    </RadioGroup>
                                </FormControl>
                            </HStack>

                            <SubmitButton
                                type="submit"
                                size="sm"
                                colorScheme="blue"
                                px="14"
                                rounded="full"
                            >
                                {id ? "Update" : "Add"}
                            </SubmitButton>
                        </VStack>
                    )}}
                </Formik>
            </HStack>

            {id && <UpdatePassword />}

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

export default UserDetails;
