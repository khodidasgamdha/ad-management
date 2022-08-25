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
import { useUpdateAdUploadStatus } from "../../../../../hooks/campaign-briefs/useUpdateAdUploadStatus";

export const DV360AdDetails = ({
    data,
    getImages,
    url,
    method,
    clientId,
    campaignId,
    adUploadId,
}) => {
    const [isSuccessModalOpen, setSuccessModal] = useState(false);
    const [isErrorModalOpen, setErrorModal] = useState(false);
    const [formData, setFromData] = useState(dv360AdUploadInitialValues);
    const [hashArray, setHashArray] = useState([]);
    const [description, setDescription] = useState("");
    const [approval, setApproval] = useState(false);

    const { mutate } = useUpdateAdUploadStatus();

    const sendData = () => {
        getImages({
            images: hashArray,
        });
    };

    useEffect(() => {
        if (data?.id) {
            setFromData({
                adName: data.name,
                description: data.detail.description,
                displayName: data.detail.displayName,
                creativeType: data.detail.creativeType,
                hostingSource: data.detail.hostingSource,
            });
            setHashArray(data.detail.fileInfoList);
        } else if (
            data?.adName &&
            data?.description &&
            data?.displayName &&
            data?.creativeType &&
            data?.hostingSource &&
            data?.images
        ) {
            setFromData({
                adName: data.name,
                description: data.description,
                displayName: data.displayName,
                creativeType: data.creativeType,
                hostingSource: data.hostingSource,
            });
            setHashArray(data.images);
        }
        if (data?.status && data.status == "Created") {
            setApproval(true);
        }
    }, [data]);

    return (
        <>
            <Box display="flex" justifyContent="space-between" my={4} mb={7}>
                <Heading color={"gray"} fontSize="xl">
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
                {approval && (
                    <Box display="flex">
                        <Button
                            size="sm"
                            mr={2}
                            colorScheme="green"
                            backgroundColor="green.400"
                            borderRadius={4}
                            disabled={!clientId || !campaignId || !adUploadId}
                            onClick={() =>
                                mutate(
                                    {
                                        clientId,
                                        campaignId,
                                        adUploadId,
                                        status: "Approved",
                                    },
                                    {
                                        onSuccess: () => {
                                            setApproval(false);
                                        },
                                    }
                                )
                            }
                        >
                            Approve
                        </Button>
                        <Button
                            size="sm"
                            colorScheme="red"
                            backgroundColor="red.400"
                            borderRadius={4}
                            disabled={!clientId || !campaignId || !adUploadId}
                            onClick={() =>
                                mutate({
                                    clientId,
                                    campaignId,
                                    adUploadId,
                                    status: "Rejected",
                                })
                            }
                        >
                            Reject
                        </Button>
                    </Box>
                )}
            </Box>
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
                            description: values.description,
                            detail: {
                                name: values.adName,
                                creativeType: values.creativeType,
                                description: values.description,
                                displayName: values.displayName,
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
                                                    htmlFor="description"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Description - max 128
                                                    characters
                                                </FormLabel>
                                                <div className="input-box">
                                                    <Textarea
                                                        id="description"
                                                        name="description"
                                                        value={
                                                            values.description
                                                        }
                                                        placeholder=""
                                                        inputprops={{
                                                            variant: "outline",
                                                            type: "text",
                                                        }}
                                                        onChange={(e) =>
                                                            setFromData({
                                                                ...formData,
                                                                description:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    />
                                                    <CircularProgress
                                                        max={
                                                            dv360AdUploadalueLengths.description
                                                        }
                                                        value={
                                                            values.description
                                                                .length
                                                        }
                                                        color={
                                                            values.description
                                                                .length >
                                                            dv360AdUploadalueLengths.description
                                                                ? "red.400"
                                                                : "green.400"
                                                        }
                                                    >
                                                        <CircularProgressLabel>
                                                            {values.description
                                                                .length >
                                                            dv360AdUploadalueLengths.description
                                                                ? dv360AdUploadalueLengths.description -
                                                                  values
                                                                      .description
                                                                      .length
                                                                : values
                                                                      .description
                                                                      .length}
                                                        </CircularProgressLabel>
                                                    </CircularProgress>
                                                </div>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="displayName"
                                                    color="gray"
                                                    fontSize="sm"
                                                >
                                                    Display Name - max 1024
                                                    characters
                                                </FormLabel>
                                                <div className="input-box">
                                                    <InputControl
                                                        id="displayName"
                                                        name="displayName"
                                                        value={
                                                            values.displayName
                                                        }
                                                        inputprops={{
                                                            variant: "outline",
                                                            type: "text",
                                                        }}
                                                        onChange={(e) =>
                                                            setFromData({
                                                                ...formData,
                                                                displayName:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    />
                                                    <CircularProgress
                                                        max={
                                                            dv360AdUploadalueLengths.displayName
                                                        }
                                                        value={
                                                            values.displayName
                                                                .length
                                                        }
                                                        color={
                                                            values.displayName
                                                                .length >
                                                            dv360AdUploadalueLengths.displayName
                                                                ? "red.400"
                                                                : "green.400"
                                                        }
                                                    >
                                                        <CircularProgressLabel>
                                                            {values.displayName
                                                                .length >
                                                            dv360AdUploadalueLengths.displayName
                                                                ? dv360AdUploadalueLengths.displayName -
                                                                  values
                                                                      .displayName
                                                                      .length
                                                                : values
                                                                      .displayName
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
