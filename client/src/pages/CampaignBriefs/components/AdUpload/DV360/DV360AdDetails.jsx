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
    Icon,
} from "@chakra-ui/react";
import { InputControl, SelectControl } from "formik-chakra-ui";
import { Form, Formik } from "formik";
import { FileUpload } from "../FileUpload";
import { dv360AdUploadalueLengths } from "../../../constant/InitialValues";
import { CreativeType, hostingSource } from "../../../constant/SelectValues";
import instance from "../../../../../helpers/axios";
import ErrorModal from "../../../../../components/PopupModal/ErrorModal";
import SuccessModal from "../../../../../components/PopupModal/SuccessModal";
import { dv360AdUploadInitialValues } from "../../../constant/InitialValues";

export const DV360AdDetails = ({ data, getImages, url, method }) => {
    const [isSuccessModalOpen, setSuccessModal] = useState(false);
    const [isErrorModalOpen, setErrorModal] = useState(false);
    const [formData, setFromData] = useState(dv360AdUploadInitialValues);
    const [hashArray, setHashArray] = useState([]);
    const [description, setDescription] = useState("");

    const sendData = () => {
        getImages({
            adName: formData.adName,
            mainAsset: formData.primaryText,
            landingPage: formData.headline,
            creativeType: CreativeType.filter(
                (el) => el.key === formData.creativeType
            )?.[0]?.key,
            hostingSource: hostingSource.filter(
                (el) => el.key === formData.hostingSource
            )?.[0]?.key,
            images: hashArray,
        });
    };

    useEffect(() => {
        if (data?.id) {
            setFromData({
                adName: data.name,
                mainAsset: data.detail.description,
                landingPage: data.detail.displayName,
                creativeType: data.detail.creativeType,
                hostingSource: data.detail.hostingSource,
            });
            setHashArray(data.detail.fileInfoList);
        } else if (
            data?.adName &&
            data?.mainAsset &&
            data?.landingPage &&
            data?.creativeType &&
            data?.hostingSource &&
            data?.images
        ) {
            setFromData({
                adName: data.name,
                mainAsset: data.mainAsset,
                landingPage: data.landingPage,
                creativeType: data.creativeType,
                hostingSource: data.hostingSource,
            });
            setHashArray(data.images);
        }
    }, [data]);

    return (
        <>
            <Heading color={"gray"} fontSize="xl" my={4} mb={7}>
                Current status:
                <span style={{ marginLeft: "10px" }}>
                    <Icon
                        viewBox="0 0 200 200"
                        mr={2}
                        color={
                            data?.status === "Created"
                                ? "#59AB9E"
                                : data?.status === "Approved"
                                ? "#3F7EE6"
                                : data?.status === "Rejected"
                                ? "#FFA383"
                                : "#FFA383"
                        }
                    >
                        <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                    </Icon>
                    {data?.status || "Draft"}
                </span>
            </Heading>
            <Grid className="fb-upload-detail-form">
                <Formik
                    enableReinitialize
                    initialValues={formData}
                    onSubmit={async (values, actions) => {
                        const fileInfoList = hashArray.map((el) => {
                            return {
                                ...el,
                                metadata: [{ height: "", width: "" }],
                            };
                        });
                        const mediaIds = hashArray.map((el) => el.imageHash);
                        const dimensions = hashArray.map(() => {
                            return {
                                width: "",
                                height: "",
                            };
                        });
                        let payload = {
                            name: values.adName,
                            description: values.mainAsset,
                            detail: {
                                name: values.adName,
                                creativeType: values.creativeType,
                                description: values.mainAsset,
                                displayName: values.landingPage,
                                hostingSource: values.hostingSource,
                                mediaIds: mediaIds,
                                fileInfoList: fileInfoList,
                                dimensions: dimensions,
                            },
                        };
                        if (!data?.id) {
                            payload = {
                                ...payload,
                                ad_upload_type: "DV360",
                            };
                        }
                        await instance({
                            method: method,
                            url: url,
                            withCredentials: false,
                            data: payload,
                        })
                            .then((res) => {
                                if (res.status === 200) {
                                    setSuccessModal(true);
                                }
                            })
                            .catch((error) => {
                                setDescription(error.response.data.message);
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
                                    <GridItem
                                        w="full"
                                        colSpan={{ base: 6, lg: 4 }}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="adName"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Ad Name - max 512 characters
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
                                                                adName: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                    <CircularProgress
                                                        max={
                                                            dv360AdUploadalueLengths.adName
                                                        }
                                                        value={
                                                            values.adName.length
                                                        }
                                                        color={
                                                            values.adName
                                                                .length >
                                                            dv360AdUploadalueLengths.adName
                                                                ? "red.400"
                                                                : "green.400"
                                                        }
                                                    >
                                                        <CircularProgressLabel>
                                                            {values.adName
                                                                .length >
                                                            dv360AdUploadalueLengths.adName
                                                                ? dv360AdUploadalueLengths.adName -
                                                                  values.adName
                                                                      .length
                                                                : values.adName
                                                                      .length}
                                                        </CircularProgressLabel>
                                                    </CircularProgress>
                                                </div>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="mainAsset"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Main Assets - max 128
                                                    characters
                                                </FormLabel>
                                                <div className="input-box">
                                                    <Textarea
                                                        id="mainAsset"
                                                        name="mainAsset"
                                                        value={values.mainAsset}
                                                        placeholder=""
                                                        inputprops={{
                                                            variant: "outline",
                                                            type: "text",
                                                        }}
                                                        onChange={(e) =>
                                                            setFromData({
                                                                ...formData,
                                                                mainAsset:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    />
                                                    <CircularProgress
                                                        max={
                                                            dv360AdUploadalueLengths.mainAsset
                                                        }
                                                        value={
                                                            values.mainAsset
                                                                .length
                                                        }
                                                        color={
                                                            values.mainAsset
                                                                .length >
                                                            dv360AdUploadalueLengths.mainAsset
                                                                ? "red.400"
                                                                : "green.400"
                                                        }
                                                    >
                                                        <CircularProgressLabel>
                                                            {values.mainAsset
                                                                .length >
                                                            dv360AdUploadalueLengths.mainAsset
                                                                ? dv360AdUploadalueLengths.mainAsset -
                                                                  values
                                                                      .mainAsset
                                                                      .length
                                                                : values
                                                                      .mainAsset
                                                                      .length}
                                                        </CircularProgressLabel>
                                                    </CircularProgress>
                                                </div>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="landingPage"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Landing Page - max 1024
                                                    characters
                                                </FormLabel>
                                                <div className="input-box">
                                                    <InputControl
                                                        id="landingPage"
                                                        name="landingPage"
                                                        value={
                                                            values.landingPage
                                                        }
                                                        inputprops={{
                                                            variant: "outline",
                                                            type: "text",
                                                        }}
                                                        onChange={(e) =>
                                                            setFromData({
                                                                ...formData,
                                                                landingPage:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    />
                                                    <CircularProgress
                                                        max={
                                                            dv360AdUploadalueLengths.landingPage
                                                        }
                                                        value={
                                                            values.landingPage
                                                                .length
                                                        }
                                                        color={
                                                            values.landingPage
                                                                .length >
                                                            dv360AdUploadalueLengths.landingPage
                                                                ? "red.400"
                                                                : "green.400"
                                                        }
                                                    >
                                                        <CircularProgressLabel>
                                                            {values.landingPage
                                                                .length >
                                                            dv360AdUploadalueLengths.landingPage
                                                                ? dv360AdUploadalueLengths.landingPage -
                                                                  values
                                                                      .landingPage
                                                                      .length
                                                                : values
                                                                      .landingPage
                                                                      .length}
                                                        </CircularProgressLabel>
                                                    </CircularProgress>
                                                </div>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="creativeType"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Creative Type
                                                </FormLabel>
                                                <div className="input-box">
                                                    <SelectControl
                                                        id="creativeType"
                                                        name="creativeType"
                                                        selectProps={{
                                                            placeholder:
                                                                "-- Select One --",
                                                            variant: "outline",
                                                            border: "2px",
                                                            borderRadius: 0,
                                                            borderColor: "gray",
                                                            fontWeight: "600",
                                                            fontSize: "14px",
                                                            lineHeight: "16px",
                                                            color: "#757998",
                                                            marginRight:
                                                                "100px",
                                                        }}
                                                        onChange={(e) =>
                                                            setFromData({
                                                                ...formData,
                                                                creativeType:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    >
                                                        {CreativeType.map(
                                                            (el) => (
                                                                <option
                                                                    value={
                                                                        el.key
                                                                    }
                                                                    key={el.key}
                                                                >
                                                                    {el.value}
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectControl>
                                                    <CircularProgress
                                                        opacity={0}
                                                    >
                                                        <CircularProgressLabel>
                                                            0
                                                        </CircularProgressLabel>
                                                    </CircularProgress>
                                                </div>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="hostingSource"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Hosting Source
                                                </FormLabel>
                                                <div className="input-box">
                                                    <SelectControl
                                                        id="hostingSource"
                                                        name="hostingSource"
                                                        selectProps={{
                                                            placeholder:
                                                                "-- Select One --",
                                                            variant: "outline",
                                                            border: "2px",
                                                            borderRadius: 0,
                                                            borderColor: "gray",
                                                            fontWeight: "600",
                                                            fontSize: "14px",
                                                            lineHeight: "16px",
                                                            color: "#757998",
                                                            marginRight:
                                                                "100px",
                                                        }}
                                                        onChange={(e) =>
                                                            setFromData({
                                                                ...formData,
                                                                hostingSource:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    >
                                                        {hostingSource.map(
                                                            (el) => (
                                                                <option
                                                                    value={
                                                                        el.key
                                                                    }
                                                                    key={el.key}
                                                                >
                                                                    {el.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectControl>
                                                    <CircularProgress
                                                        opacity={0}
                                                    >
                                                        <CircularProgressLabel>
                                                            0
                                                        </CircularProgressLabel>
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
                                                    background:
                                                        "#24a0ed !important",
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
                                                    background:
                                                        "#4CAF50 !important",
                                                    borderRadius: "32px",
                                                    width: "134px",
                                                    height: "33px",
                                                })}
                                                type="submit"
                                                disabled={!hashArray?.length}
                                            >
                                                {data?.id
                                                    ? "Update Ad"
                                                    : "Submit Ad"}
                                            </Button>
                                        </GridItem>
                                    </GridItem>
                                    <GridItem
                                        w="full"
                                        colSpan={{ base: 6, lg: 2 }}
                                    >
                                        <Box className="file-upload-box">
                                            <FileUpload
                                                getHashArray={(value) =>
                                                    setHashArray(value)
                                                }
                                                type="dv360"
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
