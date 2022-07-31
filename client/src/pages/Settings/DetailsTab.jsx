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
import * as Yup from "yup";
import Upload from "rc-upload";
import { HiCamera } from "react-icons/hi";
import { profile } from "../../atoms/authAtom";
import InputBox from "../../components/InputBox";
import instance from "../../helpers/axios";
import { useAuthCheck } from "../../hooks/useAuthCheck";

const DetailsTab = () => {
    const toast = useToast();
    const [details, setDetails] = useRecoilState(profile);

    const { refetch } = useAuthCheck();

    var initialValues = {
        name: details.name,
        // lastName: "",
        email: details.email,
        // company: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required().label("Email address"),
        name: Yup.string().required().label("Name"),
    });

    const onSubmit = async (values, actions) => {
        await instance({
            method: "PUT",
            url: `/user/${details.id}`,
            data: values,
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
        withCredentials: true,
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
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, errors }) => (
                    <VStack as={Form} w="full" align={"start"} spacing={4}>
                        <HStack spacing={4} w="full">
                            <InputBox name="name" label="First Name" />
                            {/* <InputBox name="lastName" label="Last Name" /> */}
                        </HStack>
                        <InputBox
                            name="email"
                            label="Email address"
                            type="email"
                        />
                        {/* <InputBox name="company" label="Company name" /> */}
                        <SubmitButton
                            size="sm"
                            colorScheme="blue"
                            px="14"
                            rounded="full"
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
