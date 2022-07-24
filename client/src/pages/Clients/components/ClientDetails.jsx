import { useNavigate, useParams } from "react-router-dom";
import { useGetClientDetails } from "../../../hooks/clients/useGetClientDetails";
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
  Image,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { BiArrowBack } from "react-icons/bi";
import Upload from "rc-upload";
import { HiCamera } from "react-icons/hi";
import { Form, Formik } from "formik";
import InputBox from "../../../components/InputBox";
import TextAreaBox from "../../../components/TextAreaBox";
import { InputControl } from "formik-chakra-ui";
import Dots from "../../../assets/images/three-horizon-dot.png";
import AddIcon from "../../../assets/images/add-icon.png";
import SelectInputBox from "../../../components/SelectInputBox";
import { SubmitButton } from "formik-chakra-ui";
import { clientDetails } from "../constant/clientInfo";
import { useEffect, useState } from "react";

const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(clientDetails)

  const { data } = useGetClientDetails(id);

  useEffect(() => {
    setFormData({
        companyName: data?.detail?.companyName,
        firstName: data?.detail?.contactName,
        lastName: "",
        email: data?.detail?.email,
        phone: data?.detail?.phone,
        industry: data?.detail?.industry,
        address: data?.detail?.address,
        industryType: data?.detail?.industryType,
        status: data?.state,
        productAndServices: data?.detail?.productAndServices,
        facebookPixels: "",
        facebookAccountId: data?.fb_config?.fb_account_id,
        facebookPageId: data?.fb_config?.fb_page_id,
    })
  }, [data])

  console.log(data);

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
        initialValues={formData}
        // validationSchema={validationSchema}
        // onSubmit={onSubmit}
        >
          {({ values, errors, handleChange }) => (
            <VStack as={Form} w="70%" align={"start"} spacing={4}>
              <InputBox 
                name="company" 
                label="Company name"
                value={formData.companyName} 
                onChange={handleChange} 
              />
              <HStack spacing={4} w="full">
                <InputBox 
                    name="name" 
                    label="Contact First Name"
                    value={formData.firstName}
                    onChange={handleChange} 
                    />
                <InputBox 
                    name="lastName" 
                    label="Contact Last Name" 
                    value={formData.lastName}
                    onChange={handleChange} 
                    />
              </HStack>
              <InputBox 
                name="email" 
                label="Email" 
                type="email" 
                value={formData.email}
                onChange={handleChange} 
                />
              <HStack spacing={4} w="full">
                <InputBox 
                    name="name" 
                    label="Phone" 
                    value={formData.phone}
                    onChange={handleChange} 
                    />
                <InputBox
                  name="lastName"
                  label="Industry | Product & Services "
                  value={formData.industry}
                  onChange={handleChange} 
                  />
              </HStack>
              <HStack spacing={4} w="full">
                <TextAreaBox 
                    name="name" 
                    label="Address" 
                    value={formData.address}
                    onChange={handleChange} 
                    />
                <FormControl as="fieldset">
                  <RadioGroup 
                    defaultValue="B2B" 
                    value={formData.industryType}
                    onChange={handleChange} 
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
                    defaultValue="ON HOLD"
                    value={formData.status}
                      onChange={handleChange} 
                  >
                    <HStack spacing="24px">
                      <Radio value="ACTIVE">ACTIVE</Radio>
                      <Radio value="INACTIVE">INACTIVE</Radio>
                      <Radio value="ON HOLD">ON HOLD</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </HStack>
              <Divider />
              {/* <FormControl as="fieldset">
                <FormLabel as="legend" color="gray" fontSize="sm">
                  Facebook Pixels
                </FormLabel>
                <HStack spacing="30px" mb={5}>
                  <InputControl
                    id=""
                    name="name"
                    inputProps={{
                      variant: "outline",
                      border: "2px",
                      borderRadius: 0,
                      borderColor: "gray",
                      type: "text",
                    }}
                  />
                  <Img src={Dots} />
                </HStack>
                <HStack spacing="30px" mb={5}>
                  <InputControl
                    id=""
                    name="name"
                    inputProps={{
                      variant: "outline",
                      border: "2px",
                      borderRadius: 0,
                      borderColor: "gray",
                      type: "text",
                    }}
                  />
                  <Img src={Dots} />
                </HStack>
                <HStack spacing="10px">
                  <Img src={AddIcon} />
                  <Text>New Line</Text>
                </HStack>
              </FormControl> */}
              <Divider />
              <SelectInputBox 
                name="email" 
                label="Facebook Account ID"
                value={formData.facebookAccountId}
                onChange={handleChange}
                />
              <InputBox 
                name="name" 
                label="Facebook Page ID" 
                value={formData.facebookPageId}
                onChange={handleChange}
              />
              <Divider />
              <Wrap spacing="28px">
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
              </Wrap>
              <Divider />
              <SubmitButton size="sm" colorScheme="blue" px="14" rounded="full">
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
