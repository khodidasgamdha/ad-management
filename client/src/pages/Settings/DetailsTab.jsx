import {
    Avatar,
    Box,
    HStack,
    IconButton,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SubmitButton } from "formik-chakra-ui";
import { useRecoilState } from "recoil";
import validationSchema from "../../validations/Setting/Details";
import Upload from "rc-upload";
import { HiCamera } from "react-icons/hi";
import { profile } from "../../atoms/authAtom";
import InputBox from "../../components/InputBox";
import instance from "../../helpers/axios";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useState } from "react";
import { useEffect } from "react";
import { detailInitialValue } from "./constant/InititalValues";
import MultiSelectInputBox from "../../components/MultiSelectInputBox";
import { Roles } from "../../constant";
import { useGetClientList } from "../../hooks/clients/useGetClientList";
import { getClients } from "../../store/client/clientThunk";
import { useDispatch } from "react-redux";

const DetailsTab = () => {
    const toast = useToast();
    const [details, setDetails] = useRecoilState(profile);
    const { refetch } = useAuthCheck();
    const dispatch = useDispatch()

    const [isAdmin, setAdmin] = useState(false);
    const [selectedClients, setSelectedClients] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const { data: clients } = useGetClientList();

    useEffect(() => {
        if (details?.access_info?.roles?.length) {
            setAdmin(
                details.access_info.roles.includes("Admin") ||
                    details.access_info.roles.includes("Developer")
            );
        }
        if (details?.access_info?.clients?.length) {
            setSelectedClients(
                details.access_info.clients.map((el) => {
                    return { value: el.id, label: el.name };
                })
            );
        }
        if (details?.access_info?.roles?.length) {
            setSelectedRoles(
                details.access_info.roles.map((el) => {
                    const id = Roles.filter((e) => e.value === el);
                    return { value: el, label: id?.[0]?.title };
                })
            );
        }
    }, [details]);

    const onSubmit = async (values, actions) => {
        await instance({
            method: "PUT",
            url: `/user/${details.id}`,
            data: {
                name: values.name,
                email: values.email,
                roles: selectedRoles.map((el) => el.value),
                clients: selectedClients.map((el) => el.value)
            },
        })
            .then((response) => {
                toast({
                    isClosable: true,
                    status: "success",
                    variant: "top-accent",
                    position: "top-right",
                    title: "Success",
                    description: response.data?.data?.message,
                });
                dispatch(getClients(details?.id));
                refetch();
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
    };

    const uploadProps = {
        customRequest: (fileData) => {
            const data = new FormData();
            data.append("pic", fileData.file, fileData.file.name);

            return instance({
                method: "PUT",
                url: `/user/me/profile-pic`,
                data: data,
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${fileData._boundary}`,
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        toast({
                            isClosable: true,
                            status: "success",
                            variant: "top-accent",
                            position: "top-right",
                            title: "Success",
                            description: response.data?.data?.message,
                        });
                        refetch();
                    } else {
                        console.log(response.data);
                    }
                })
                .catch((error) => {
                    toast({
                        isClosable: true,
                        status: "error",
                        title: "Error",
                        variant: "top-accent",
                        position: "top-right",
                        description:
                            error.response?.data?.message ||
                            "Something went wrong!",
                    });
                });
        },
        withCredentials: false,
    };

    return (
        <HStack mt={6} spacing={10} align={"start"}>
            <Box pos="relative">
                <Avatar
                    size="2xl"
                    src={
                        details.other_info?.profile_pic_url &&
                        `${process.env.REACT_APP_API_URL}/uploads/${details?.other_info?.profile_pic_url}`
                    }
                    name={details.name}
                />
                <Upload {...uploadProps}>
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
                </Upload>
            </Box>

            <Formik
                initialValues={detailInitialValue(details)}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, errors }) => (
                    <VStack as={Form} w="full" align={"start"} spacing={4}>
                        <HStack spacing={4} w="full">
                            <InputBox name="name" label="Full Name" />
                            {/* <InputBox name="lastName" label="Last Name" /> */}
                        </HStack>
                        <InputBox
                            name="email"
                            label="Email address"
                            type="email"
                        />
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
                        {/* <InputBox name="company" label="Company name" /> */}
                        <SubmitButton
                            size="sm"
                            colorScheme="blue"
                            px="14"
                            rounded="full"
                            disabled={!isAdmin}
                        >
                            Update
                        </SubmitButton>
                    </VStack>
                )}
            </Formik>
        </HStack>
    );
};

export default DetailsTab;
