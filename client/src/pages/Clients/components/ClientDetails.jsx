import { useNavigate, useParams } from "react-router-dom";
import { useGetClientDetails } from "../../../hooks/clients/useGetClientDetails";
import { useGetFbAccounts } from "../../../hooks/clients/useGetFbAccounts";
import {
    Avatar,
    Box,
    Center,
    css,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    HStack,
    IconButton,
    Img,
    Radio,
    RadioGroup,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { BiArrowBack } from "react-icons/bi";
import Upload from "rc-upload";
import { HiCamera } from "react-icons/hi";
import { Form, Formik } from "formik";
import InputBox from "../../../components/InputBox";
import TextAreaBox from "../../../components/TextAreaBox";
import { SelectControl } from "formik-chakra-ui";
import { SubmitButton } from "formik-chakra-ui";
import { clientDetails } from "../constant/clientInfo";
import { useEffect, useState } from "react";
import instance from "../../../helpers/axios";
import SuccessModal from "../../../components/PopupModal/SuccessModal";
import ErrorModal from "../../../components/PopupModal/ErrorModal";

const ClientDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isSuccessModalOpen, setSuccessModal] = useState(false);
    const [isErrorModalOpen, setErrorModal] = useState(false);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("POST");
    const [url, setUrl] = useState("");

    const [formData, setFormData] = useState(clientDetails);
    const [industryType, setIndustryType] = useState(null);
    const [status, setStatus] = useState(null);
    const [fbPixels, setFbPixels] = useState([{ name: "", pixelId: "" }]);

    const { data } = useGetClientDetails(id);
    const { mutate, data: fbAccounts } = useGetFbAccounts();

    useEffect(() => {
        mutate();
    }, []);

    useEffect(() => {
        if (id) {
            setType("PUT");
            setUrl(`/client/${id}`);
        } else {
            setType("POST");
            setUrl("/client/");
        }
    }, [id]);

    useEffect(() => {
        if(data) {
            let firstName;
            let lastName;
            if(data?.detail?.contactName) {
                firstName = (data?.detail?.contactName).split(" ")[0] 
                lastName = (data?.detail?.contactName).split(" ")[1] 
            }
            setFormData({
                companyName: data?.detail?.companyName,
                firstName: firstName.trim(),
                lastName: lastName.trim() || "",
                email: data?.detail?.email,
                description: data?.description,
                phone: data?.detail?.phone,
                industry: data?.detail?.industry,
                address: data?.detail?.address,
                productAndServices: data?.detail?.productAndServices,
                facebookAccountId: data?.fb_config?.fb_account_id,
                facebookPageId: data?.fb_config?.fb_page_id,
            });
            setIndustryType(data?.detail?.industryType);
            setStatus(data?.state);
            setFbPixels(data?.detail?.fbPixels);
        }
    }, [data]);

    console.log(fbPixels);

    return (
        <>
            <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                <GridItem w="full" colSpan={{ base: 6, lg: 6 }}>
                    <Heading fontSize="sm" mb={3} color={TEXT_COLOR}>
                        <Flex
                            onClick={() => navigate("/clients")}
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
                        {id ? "Client Details" : "Add New Client"}
                    </Heading>
                </GridItem>
            </Grid>
            <HStack mt={6} spacing={10} align={"start"}>
                <Box pos="relative">
                    <Avatar size="2xl" />
                    <Upload>
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
                    enableReinitialize
                    initialValues={formData}
                    // validationSchema={validationSchema}
                    onSubmit={async (values, actions) => {
                        let data;
                        if (id) {
                            data = {
                                description: values.description,
                                fbAccountId: values.facebookAccountId,
                                fbPageId: values.facebookPageId,
                                name: values.companyName,
                                state: status,
                                detail: {
                                    address: values.address,
                                    companyName: values.companyName,
                                    contactName: `${values.firstName} ${values.lastName}`,
                                    email: values.email,
                                    industry: values.industry,
                                    industryType: industryType,
                                    phone: values.phone,
                                    productAndServices:
                                        values.productAndServices,
                                    fbPixels: fbPixels,
                                },
                            };
                        } else {
                            data = {
                                description: values.description,
                                fbAccountId: values.facebookAccountId,
                                fbPageId: values.facebookPageId,
                                name: values.companyName,
                                detail: {
                                    address: values.address,
                                    companyName: values.companyName,
                                    contactName:
                                        values.firstName + values.lastName,
                                    email: values.email,
                                    industry: values.industry,
                                    industryType: industryType,
                                    phone: values.phone,
                                    productAndServices:
                                        values.productAndServices,
                                    fbPixels: fbPixels,
                                },
                            };
                        }
                        await instance({
                            method: type,
                            url: url,
                            withCredentials: true,
                            data: data,
                        })
                            .then((res) => {
                                if (res.status === 200) {
                                    //   toast({
                                    //     isClosable: true,
                                    //     status: "success",
                                    //     variant: "top-accent",
                                    //     position: "top-right",
                                    //     title: "Success",
                                    //     description: res.data.message,
                                    //   });
                                    setSuccessModal(true);
                                    //   navigate("/clients")
                                }
                            })
                            .catch((error) => {
                                // toast({
                                //   isClosable: true,
                                //   status: "error",
                                //   variant: "top-accent",
                                //   position: "top-right",
                                //   description: error.response.data.message,
                                // });
                                setDescription(error.response.data.message);
                                setErrorModal(true);
                            });
                    }}
                >
                    {({ values, errors, handleChange }) => (
                        <VStack as={Form} w="70%" align={"start"} spacing={4}>
                            <InputBox
                                name="companyName"
                                label="Company name"
                                value={values.companyName}
                                onChange={handleChange}
                            />
                            <HStack spacing={4} w="full">
                                <InputBox
                                    name="firstName"
                                    label="Contact First Name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                                <InputBox
                                    name="lastName"
                                    label="Contact Last Name"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            </HStack>
                            <InputBox
                                name="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <HStack spacing={4} w="full">
                                <InputBox
                                    name="phone"
                                    label="Phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                <InputBox
                                    name="industry"
                                    label="Industry"
                                    value={values.industry}
                                    onChange={handleChange}
                                />
                            </HStack>
                            <InputBox
                                name="description"
                                label="Description"
                                value={values.description}
                                onChange={handleChange}
                            />
                            <InputBox
                                name="productAndServices"
                                label="Product & Services "
                                value={values.productAndServices}
                                onChange={handleChange}
                            />
                            <HStack spacing={4} w="full">
                                <TextAreaBox
                                    name="address"
                                    label="Address"
                                    value={values.address}
                                    onChange={handleChange}
                                />
                                <FormControl as="fieldset">
                                    <RadioGroup
                                        // defaultValue="B2B"
                                        value={industryType}
                                        onChange={setIndustryType}
                                        name="industryType"
                                    >
                                        <HStack spacing="30px">
                                            <Radio size="lg" value="B2B">
                                                B2B
                                            </Radio>
                                            <Radio size="lg" value="B2C">
                                                B2C
                                            </Radio>
                                        </HStack>
                                    </RadioGroup>
                                </FormControl>
                            </HStack>
                            {id && (
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
                                                <Radio value="ACTIVE">
                                                    ACTIVE
                                                </Radio>
                                                <Radio value="INACTIVE">
                                                    INACTIVE
                                                </Radio>
                                                <Radio value="ON_HOLD">
                                                    ON HOLD
                                                </Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </HStack>
                            )}
                            <Divider />
                            <FormControl as="fieldset">
                                <FormLabel
                                    as="legend"
                                    color="gray"
                                    fontSize="sm"
                                >
                                    Facebook Pixels
                                </FormLabel>
                                {fbPixels?.map((el, index) => (
                                    <HStack key={index} spacing="30px" mb={5}>
                                        <InputBox
                                            id="facebookPixels"
                                            name="facebookPixels"
                                            value={el?.pixelId}
                                            // value={`${el?.name} | ${el?.pixelId}`}
                                            inputProps={{
                                                variant: "outline",
                                                border: "2px",
                                                borderRadius: 0,
                                                borderColor: "gray",
                                                type: "text",
                                            }}
                                            onChange={(e) => {
                                                const val = [...fbPixels];
                                                // const [name, pixel] = (e.target.value).split("|")
                                                val[index].pixelId = e.target.value
                                                // val[index].name = name.trim()
                                                setFbPixels(val)
                                            }}
                                        />
                                        <DeleteIcon
                                            color="red"
                                            cursor="pointer"
                                            onClick={() =>
                                                setFbPixels(
                                                    fbPixels.filter((el, ind) => ind != index)
                                                )
                                            }
                                        />
                                    </HStack>
                                ))}
                                <HStack
                                    spacing="10px"
                                    onClick={() =>
                                        setFbPixels([
                                            ...fbPixels,
                                            { name: "", pixelId: "" },
                                        ])
                                    }
                                >
                                    <AddIcon cursor="pointer" />
                                    <Text>New Line</Text>
                                </HStack>
                            </FormControl>
                            <Divider />
                            <SelectControl
                                name="facebookAccountId"
                                label="Facebook Account ID"
                                value={values.facebookAccountId}
                                onChange={handleChange}
                            >
                                {fbAccounts?.adAccounts?.length &&
                                    fbAccounts?.adAccounts.map((el) => (
                                        <option key={el.id} value={el.id}>
                                            {el.name}
                                        </option>
                                    ))}
                            </SelectControl>
                            <InputBox
                                name="facebookPageId"
                                label="Contact Page Id"
                                value={values.facebookPageId}
                                onChange={handleChange}
                            />
                            {/* <Divider /> */}
                            {/* <Wrap spacing="28px">
                <Flex
                  flexDirection="column"
                  justify="center"
                  alignItems="center"
                >
                  <Img
                    borderRadius="full"
                    boxSize="100px"
                    objectFit="cover"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                  <Text color="#757998">Jason Suez</Text>
                </Flex>
              </Wrap> */}
                            {/* <Divider /> */}

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
                    )}
                </Formik>
            </HStack>

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

export default ClientDetails;
