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
  useToast
} from "@chakra-ui/react";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { BiArrowBack } from "react-icons/bi";
import Upload from "rc-upload";
import { HiCamera } from "react-icons/hi";
import { Form, Formik } from "formik";
import InputBox from "../../../components/InputBox";
import TextAreaBox from "../../../components/TextAreaBox";
import { SelectControl } from "formik-chakra-ui";
import Dots from "../../../assets/images/three-horizon-dot.png";
import { SubmitButton } from "formik-chakra-ui";
import { clientDetails } from "../constant/clientInfo";
import { useEffect, useState } from "react";
import instance from "../../../helpers/axios";

const ClientDetails = () => {
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState(clientDetails)
  const [industryType, setIndustryType] = useState(null)
  const [status, setStatus] = useState(null)
  const [fbPixels, setFbPixels] = useState([])

  const { data } = useGetClientDetails(id);
  const { mutate, data: fbAccounts } = useGetFbAccounts();

  useEffect(() => {
    mutate()
  }, [])

  useEffect(() => {
    setFormData({
        companyName: data?.detail?.companyName,
        firstName: data?.detail?.contactName,
        lastName: "",
        email: data?.detail?.email,
        description: data?.description,
        phone: data?.detail?.phone,
        industry: data?.detail?.industry,
        address: data?.detail?.address,
        productAndServices: data?.detail?.productAndServices,
        facebookAccountId: data?.fb_config?.fb_account_id,
        facebookPageId: data?.fb_config?.fb_page_id,
    })
    setIndustryType(data?.detail?.industryType)
    setStatus(data?.state)
    setFbPixels(data?.detail?.fbPixels)
  }, [data])

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem w="full" colSpan={{ base: 6, lg: 6 }}>
          <Heading fontSize="sm" mb={3} color={TEXT_COLOR}>
            <Flex onClick={() => navigate("/clients")} cursor={"pointer"}>
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
        <GridItem w="full" colSpan={{ base: 6, lg: 6 }} mb={{ base: 3, lg: 0 }}>
          <Heading fontSize="4xl" mb={7} color={TEXT_COLOR}>
            Client Details
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
            await instance({
              method: "PUT",
              url: `/client/${id}`,
              withCredentials: true,
              data: {
                description: values.description,
                fbAccountId: values.facebookAccountId,
                fbPageId: values.facebookPageId,
                name: values.companyName,
                state: status,
                detail: {
                  address: values.address,
                  companyName: values.companyName,
                  contactName: values.firstName + values.lastName,
                  email: values.email,
                  industry: values.industry,
                  industryType: industryType,
                  phone: values.phone,
                  productAndServices: values.productAndServices,
                  fbPixels: fbPixels
                }
              }
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
                  navigate("/clients")
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
          {({ values, errors, handleChange }) => (
            <VStack as={Form} w="70%" align={"start"} spacing={4}>
              <InputBox 
                name="company" 
                label="Company name"
                value={values.companyName} 
                onChange={handleChange} 
              />
              <HStack spacing={4} w="full">
                <InputBox 
                    name="name" 
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
              <HStack spacing={4} w="full">
                <FormControl as="fieldset">
                  <FormLabel as="legend" color="gray" fontSize="sm">
                    Status
                  </FormLabel>
                  <RadioGroup 
                    value={status}
                    onChange={setStatus} 
                    name="status"
                  >
                    <HStack spacing="24px">
                      <Radio value="ACTIVE">ACTIVE</Radio>
                      <Radio value="INACTIVE">INACTIVE</Radio>
                      <Radio value="ON_HOLD">ON HOLD</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </HStack>
              <Divider />
              <FormControl as="fieldset">
                <FormLabel as="legend" color="gray" fontSize="sm">
                  Facebook Pixels
                </FormLabel>
                {
                    fbPixels?.length && 
                    fbPixels.map((el, index) => (
                        <HStack key={index} spacing="30px" mb={5}>
                          <InputBox
                            id="facebookPixels"
                            name="facebookPixels"
                            value={`${el?.name} | ${el?.pixelId}`}
                            inputProps={{
                              variant: "outline",
                              border: "2px",
                              borderRadius: 0,
                              borderColor: "gray",
                              type: "text",
                            }}
                            onChange={handleChange}
                          />
                          <Img src={Dots} />
                        </HStack>
                    ))
                }
                {/* <HStack spacing="10px">
                  <Img src={AddIcon} />
                  <Text>New Line</Text>
                </HStack> */}
              </FormControl>
              <Divider />
              <SelectControl
                name="facebookAccountId" 
                label="Facebook Account ID"
                value={values.facebookAccountId}
                onChange={handleChange}
              >
                {
                  fbAccounts?.adAccounts?.length &&
                  fbAccounts?.adAccounts.map((el) => (
                    <option key={el.id} value={el.id}>{el.name}</option>
                  ))
                }
              </SelectControl>
              <InputBox 
                name="facebookPageId" 
                label="Facebook Page ID" 
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
                Update
              </SubmitButton>
            </VStack>
          )}
        </Formik>
      </HStack>
    </>
  );
};

export default ClientDetails;
