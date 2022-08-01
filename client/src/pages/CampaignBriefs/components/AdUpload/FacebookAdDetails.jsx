import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Textarea,
  Box,
  Button,
  css,
} from "@chakra-ui/react";
import { InputControl, SelectControl } from "formik-chakra-ui";
import { Form, Formik } from "formik";
import { FileUpload } from "./FileUpload";
import {
  initialValues,
  valueLengths,
  facebookAccountIds,
} from "../../constant/FacebookAdUpload";
import instance from "../../../../helpers/axios";
import ErrorModal from "../../../../components/PopupModal/ErrorModal";
import SuccessModal from "../../../../components/PopupModal/SuccessModal";

export const FacebookAdDetails = ({ data, getImages, url, method }) => {
  const [formData, setFromData] = useState(initialValues);
  const [hashArray, setHashArray] = useState([]);

  const [isSuccessModalOpen, setSuccessModal] = useState(false);
  const [isErrorModalOpen, setErrorModal] = useState(false);
  const [description, setDescription] = useState("");

  const sendData = () => {
    getImages({
      name: formData.adName,
      message: formData.primaryText,
      headline: formData.headline,
      description: formData.description,
      url: formData.url,
      type: facebookAccountIds.filter(
        (el) => el.key === formData.facebookAccountId
      )?.[0]?.key,
      images: hashArray,
    });
  };

  useEffect(() => {
    if (data?.id) {
      setFromData({
        adName: data.name,
        primaryText: data.message,
        headline: data.detail.headline,
        description: data.description,
        url: data.detail.link,
        facebookAccountId: data.detail.callToAction.type,
      });
      setHashArray(data.detail.fileInfoList);
    } else if (
      data?.name &&
      data?.message &&
      data?.headline &&
      data?.description &&
      data?.url &&
      data?.type &&
      data?.images
    ) {
      setFromData({
        adName: data.name,
        primaryText: data.message,
        headline: data.headline,
        description: data.description,
        url: data.url,
        facebookAccountId: data.type,
      });
      setHashArray(data.images);
    }
  }, [data]);

  return (
    <>
      <Heading color={"gray"} fontSize="xl" my={4} mb={7}>
        Current status: <span>{data?.status || "Draft"}</span>
      </Heading>
      <Grid className="fb-upload-detail-form">
        <Formik
          enableReinitialize
          initialValues={formData}
          // validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            let payload = {
              name: values.adName,
              message: values.primaryText,
              description: values.description,
              detail: {
                name: values.adName,
                message: values.primaryText,
                link: values.url,
                headline: values.headline,
                description: values.description,
                callToAction: {
                  type: values.facebookAccountId,
                },
                fileInfoList: hashArray,
                imageHashes: [hashArray[0].imageHash],
              },
            };
            if (!data?.id) {
              payload = { ...payload, ad_upload_type: "FACEBOOK" };
            }
            await instance({
              method: method,
              url: url,
              withCredentials: true,
              data: payload,
            })
              .then((res) => {
                if (res.status === 200) {
                  setSuccessModal(true);
                  // toast({
                  //   isClosable: true,
                  //   status: "success",
                  //   variant: "top-accent",
                  //   position: "top-right",
                  //   title: "Success",
                  //   description: res.data.message,
                  // });
                  // navigate(`/campaign-briefs/${id}`);
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
                setDescription(error.response.data.message)
                setErrorModal(true);
              });
          }}
        >
          {({ dirty, isValid, isSubmitting, values }) => {
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
                        <FormLabel htmlFor="adName" color="gray" fontSize="sm">
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
                            onChange={(e) =>
                              setFromData({
                                ...formData,
                                adName: e.target.value,
                              })
                            }
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
                            onChange={(e) =>
                              setFromData({
                                ...formData,
                                primaryText: e.target.value,
                              })
                            }
                          />
                          <CircularProgress
                            max={valueLengths.primaryText}
                            value={values.primaryText.length}
                            color={
                              values.primaryText.length >
                              valueLengths.primaryText
                                ? "red.400"
                                : "green.400"
                            }
                          >
                            <CircularProgressLabel>
                              {values.primaryText.length >
                              valueLengths.primaryText
                                ? valueLengths.primaryText -
                                  values.primaryText.length
                                : values.primaryText.length}
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
                            onChange={(e) =>
                              setFromData({
                                ...formData,
                                headline: e.target.value,
                              })
                            }
                          />
                          <CircularProgress
                            max={valueLengths.headline}
                            value={values.headline.length}
                            color={
                              values.headline.length > valueLengths.headline
                                ? "red.400"
                                : "green.400"
                            }
                          >
                            <CircularProgressLabel>
                              {values.headline.length > valueLengths.headline
                                ? valueLengths.headline - values.headline.length
                                : values.headline.length}
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
                            onChange={(e) =>
                              setFromData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                          />
                          <CircularProgress
                            max={valueLengths.description}
                            value={values.description.length}
                            color={
                              values.description.length >
                              valueLengths.description
                                ? "red.400"
                                : "green.400"
                            }
                          >
                            <CircularProgressLabel>
                              {values.description.length >
                              valueLengths.description
                                ? valueLengths.description -
                                  values.description.length
                                : values.description.length}
                            </CircularProgressLabel>
                          </CircularProgress>
                        </div>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel htmlFor="url" color="gray" fontSize="sm">
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
                            onChange={(e) =>
                              setFromData({ ...formData, url: e.target.value })
                            }
                          />
                          <CircularProgress
                            max={valueLengths.url}
                            value={values.url.length}
                            color={
                              values.url.length > valueLengths.url
                                ? "red.400"
                                : "green.400"
                            }
                          >
                            <CircularProgressLabel>
                              {values.url.length > valueLengths.url
                                ? valueLengths.url - values.url.length
                                : values.url.length}
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
                          Type
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
                            onChange={(e) =>
                              setFromData({
                                ...formData,
                                facebookAccountId: e.target.value,
                              })
                            }
                          >
                            {facebookAccountIds.map((el) => (
                              <option value={el.key} key={el.key}>
                                {el.name}
                              </option>
                            ))}
                          </SelectControl>
                          <CircularProgress opacity={0}>
                            <CircularProgressLabel>0</CircularProgressLabel>
                          </CircularProgress>
                        </div>
                      </FormControl>
                    </GridItem>
                    <GridItem
                      css={css({
                        float: "right",
                        marginRight: "68px",
                      })}
                    >
                      <Button
                        size="small"
                        css={css({
                          background: "#24a0ed !important",
                          borderRadius: "32px",
                          width: "134px",
                          height: "33px",
                          marginRight: "10px",
                        })}
                        disabled={!hashArray?.length}
                        onClick={sendData}
                      >
                        Preview
                      </Button>
                      <Button
                        size="small"
                        css={css({
                          background: "#4CAF50 !important",
                          borderRadius: "32px",
                          width: "134px",
                          height: "33px",
                        })}
                        type="submit"
                        disabled={!hashArray?.length}
                      >
                        {data?.id ? "Update Ad" : "Submit Ad"}
                      </Button>
                    </GridItem>
                  </GridItem>
                  <GridItem w="full" colSpan={{ base: 6, lg: 2 }}>
                    <Box className="file-upload-box">
                      <FileUpload
                        getHashArray={(value) => setHashArray(value)}
                      />
                    </Box>
                  </GridItem>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>

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
