import React from "react";
import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  css,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { InputControl, SelectControl } from "formik-chakra-ui";
import { Form, Formik } from "formik";

import "../style/FacebookAdUpload.css";

const FacebookAdUpload = () => {
  const navigate = useNavigate();

  const initialValues = {
    adName: "",
    primaryText: "",
    headline: "",
    description: "",
    url: "",
    facebookAccountId: "",
  }

  const valueLengths = {
    adName: -1,
    primaryText: 125,
    headline: 27,
    description: 125,
    url: 255,
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4} className="fb-upload">
      <GridItem w="full" colSpan={{ base: 6, lg: 6 }} mb={{ base: 3, lg: 0 }}>
        <Heading fontSize="sm" mb={7} color={TEXT_COLOR}>
          <Flex
            onClick={() => navigate("/campaign-briefs/new")}
            cursor={"pointer"}
          >
            <Center marginRight={2}>
              <BiArrowBack color="#A7A9BD" />
            </Center>
            <Center>
              <Text
                css={css({
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#A7A9BD",
                })}
              >
                Back to Campaign Brief
              </Text>
            </Center>
          </Flex>
        </Heading>
        <Heading fontSize="4xl" mb={4} color={TEXT_COLOR}>
          Facebook Ad Upload
        </Heading>
        <Tabs
          defaultIndex={0}
          size="sm"
          w="full"
          colorScheme="black"
          overflow="hidden"
        >
          <TabList
            overflowX="auto"
            css={css({
              scrollbarWidth: "none",
              "::-webkit-scrollbar": { display: "none" },
              WebkitOverflowScrolling: "touch",
              boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
              border: "0 none",
            })}
          >
            <Tab whiteSpace="nowrap">Details</Tab>
            <Tab whiteSpace="nowrap">Preview</Tab>
            <Tab whiteSpace="nowrap">Comments</Tab>
            <Tab whiteSpace="nowrap">Audit Logs</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading color={"gray"} fontSize="xl" my={4} mb={7}>
                Current status: <span>Draft</span>
              </Heading>
              <Grid className="fb-upload-detail-form">
                <Formik
                enableReinitialize
                initialValues={initialValues}
                // validationSchema={validationSchema}
                // onSubmit={onSubmit}
                >
                  {({ dirty, isValid, isSubmitting, values, handleChange }) => {
                    return (
                      <Form autoComplete="off">
                        <Grid
                          templateColumns="repeat(6, 1fr)"
                          gap={4}
                          className="fb-upload"
                        >
                          <GridItem w="full" colSpan={{ base: 6, lg: 4 }}>
                            <GridItem>
                              <FormControl>
                                <FormLabel
                                  htmlFor="adName"
                                  color="gray"
                                  fontSize="sm"
                                >
                                  Ad Name
                                </FormLabel>
                                <div className="input-box">
                                  <InputControl
                                    id="adName"
                                    name="adName"
                                    value={values.adName}
                                    placeholder=""
                                    inputprops={{
                                      variant: "outline",
                                      type: "text",
                                    }}
                                    onChange={handleChange}
                                  />
                                  <CircularProgress
                                    max={valueLengths.adName}
                                    value={values.adName.length}
                                    color="green.400"
                                  >
                                    <CircularProgressLabel color="gray" fontSize={30}>
                                        &#8734;
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </div>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl>
                                <FormLabel
                                  htmlFor="primaryText"
                                  color="gray"
                                  fontSize="sm"
                                >
                                  Primary Text - max 125 characters
                                </FormLabel>
                                <div className="input-box">
                                  <Textarea
                                    id="primaryText"
                                    name="primaryText"
                                    value={values.primaryText}
                                    placeholder=""
                                    inputprops={{
                                      variant: "outline",
                                      type: "text",
                                    }}
                                    onChange={handleChange}
                                  />
                                <CircularProgress
                                    max={valueLengths.primaryText}
                                    value={values.primaryText.length}
                                    color={values.primaryText.length > valueLengths.primaryText ? "red.400" : "green.400"}
                                  >
                                    <CircularProgressLabel>
                                      {
                                        values.primaryText.length > valueLengths.primaryText ? 
                                            valueLengths.primaryText - values.primaryText.length : 
                                            values.primaryText.length
                                      }
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </div>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl>
                                <FormLabel
                                  htmlFor="headline"
                                  color="gray"
                                  fontSize="sm"
                                >
                                  Headline - max 27 characters
                                </FormLabel>
                                <div className="input-box">
                                  <InputControl
                                    id="headline"
                                    name="headline"
                                    value={values.headline}
                                    inputprops={{
                                      variant: "outline",
                                      type: "text",
                                    }}
                                    onChange={handleChange}
                                  />
                                  <CircularProgress
                                    max={valueLengths.headline}
                                    value={values.headline.length}
                                    color={values.headline.length > valueLengths.headline ? "red.400" : "green.400"}
                                  >
                                    <CircularProgressLabel>
                                      {
                                        values.headline.length > valueLengths.headline ? 
                                            valueLengths.headline - values.headline.length : 
                                            values.headline.length
                                      }
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </div>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl>
                                <FormLabel
                                  htmlFor="description"
                                  color="gray"
                                  fontSize="sm"
                                >
                                  Description - max 125 characters
                                </FormLabel>
                                <div className="input-box">
                                  <InputControl
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    placeholder=""
                                    inputprops={{
                                      variant: "outline",
                                      type: "text",
                                    }}
                                    onChange={handleChange}
                                  />
                                  <CircularProgress
                                    max={valueLengths.description}
                                    value={values.description.length}
                                    color={values.description.length > valueLengths.description ? "red.400" : "green.400"}
                                  >
                                    <CircularProgressLabel>
                                      {
                                        values.description.length > valueLengths.description ? 
                                            valueLengths.description - values.description.length : 
                                            values.description.length
                                      }
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </div>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl>
                                <FormLabel
                                  htmlFor="url"
                                  color="gray"
                                  fontSize="sm"
                                >
                                  URL
                                </FormLabel>
                                <div className="input-box">
                                  <InputControl
                                    id="url"
                                    name="url"
                                    value={values.url}
                                    placeholder=""
                                    inputprops={{
                                      variant: "outline",
                                      type: "text",
                                    }}
                                    onChange={handleChange}
                                  />
                                  <CircularProgress
                                    max={valueLengths.url}
                                    value={values.url.length}
                                    color={values.url.length > valueLengths.url ? "red.400" : "green.400"}
                                  >
                                    <CircularProgressLabel>
                                      {
                                        values.url.length > valueLengths.url ? 
                                            valueLengths.url - values.url.length : 
                                            values.url.length
                                      }
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </div>
                              </FormControl>
                            </GridItem>
                            <GridItem>
                              <FormControl>
                                <FormLabel
                                  htmlFor="facebookAccountId"
                                  color="gray"
                                  fontSize="sm"
                                >
                                  Facebook Account Id
                                </FormLabel>
                                <div className="input-box">
                                  <SelectControl
                                    id="facebookAccountId"
                                    name="facebookAccountId"
                                    selectProps={{
                                      placeholder: "-- Select One --",
                                      variant: "outline",
                                      border: "2px",
                                      borderRadius: 0,
                                      borderColor: "gray",
                                      fontWeight: "600",
                                      fontSize: "11px",
                                      lineHeight: "16px",
                                      color: "#757998",
                                      marginRight: "100px",
                                    }}
                                    onChange={handleChange}
                                  >
                                    <option></option>
                                  </SelectControl>
                                  <CircularProgress opacity={0} >
                                    <CircularProgressLabel>
                                      0
                                    </CircularProgressLabel>
                                  </CircularProgress>
                                </div>
                              </FormControl>
                            </GridItem>
                            <GridItem></GridItem>
                          </GridItem>
                          <GridItem w="full" colSpan={{ base: 6, lg: 2 }}>
                            1
                          </GridItem>
                        </Grid>
                      </Form>
                    );
                  }}
                </Formik>
              </Grid>
            </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
            <TabPanel>4</TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
};

export default FacebookAdUpload;
