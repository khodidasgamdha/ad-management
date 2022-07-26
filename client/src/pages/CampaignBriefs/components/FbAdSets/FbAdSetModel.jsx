import {
    Button,
    css,
    Flex,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { CheckboxControl, SelectControl } from "formik-chakra-ui";
import { LockIcon } from "@chakra-ui/icons";
import {
    AdCategory,
    TargetingMethod,
    CreativeType,
    DeviceOptions,
    BrandAwarenessOptimizationGoalOptions,
    LinkClicksOptimizationGoalOptions,
    VideoViewsOptimizationGoalOptions,
    LeadGenerationOptimizationGoalOptions,
    ConversionsOptimizationGoalOptions,
    EventType,
    ProductcatalogsalesOptimizationGoalOptions,
} from "../../constant/SelectValues";
import instance from "../../../../helpers/axios";
import InputBox from "../../../../components/InputBox";
import {
    conversionsValidationSchema,
    validationSchema,
} from "../../../../validations/CampaignBrief/FbAdSetModel";
import { fbAdSetInitialValue } from "../../constant/InitialValues";
import { useSelector } from "react-redux";
import { useGetClientDetails } from "../../../../hooks/clients/useGetClientDetails";

const FbAdSetModel = ({ campaignId, isOpen, onClose, clientId, fbData }) => {
    const toast = useToast();
    const [fbObjective, setFbObjective] = useState([]);
    const [pixelIds, setPixelIds] = useState([]);

    const campaignFacebookObjective = useSelector(
        (state) => state.campaign.campaignFacebookObjective
    );

    const { data, refetch } = useGetClientDetails(clientId);

    useEffect(() => {
        refetch();
    }, [clientId]);

    useEffect(() => {
        setPixelIds(data?.detail?.fbPixels);
    }, [data]);

    useEffect(() => {
        if (campaignFacebookObjective) {
            if (
                campaignFacebookObjective === "BRAND_AWARENESS" ||
                campaignFacebookObjective === "POST_ENGAGEMENT"
            ) {
                setFbObjective(BrandAwarenessOptimizationGoalOptions);
            } else if (campaignFacebookObjective === "LINK_CLICKS") {
                setFbObjective(LinkClicksOptimizationGoalOptions);
            } else if (campaignFacebookObjective === "VIDEO_VIEWS") {
                setFbObjective(VideoViewsOptimizationGoalOptions);
            } else if (campaignFacebookObjective === "LEAD_GENERATION") {
                setFbObjective(LeadGenerationOptimizationGoalOptions);
            } else if (campaignFacebookObjective === "CONVERSIONS") {
                setFbObjective(ConversionsOptimizationGoalOptions);
            } else if (campaignFacebookObjective === "PRODUCT_CATALOG_SALES") {
                setFbObjective(ProductcatalogsalesOptimizationGoalOptions);
            } else if (campaignFacebookObjective === "REACH") {
                setFbObjective([]);
            }
        }
    }, [campaignFacebookObjective]);

    const onSubmit = async (values, actions) => {
        let name = "WR";
        if (values.campaignName) name += ` - ${values.campaignName}`;
        name += " - FACEBOOK";
        if (values.isLead) name += ` - Lead`;
        if (values.adCategory) {
            const val = AdCategory.filter((el) => el.key === values.adCategory);
            if (val?.[0]?.value) {
                name += ` - ${val[0].value}`;
            }
        }
        if (values.targetingMethod) {
            const val = TargetingMethod.filter(
                (el) => el.key === values.targetingMethod
            );
            if (val?.[0]?.value) {
                name += ` - ${val[0].value}`;
            }
        }
        if (values.location) name += ` - ${values.location}`;
        if (values.audience) name += ` - ${values.audience}`;
        if (values.promo) name += ` - ${values.promo}`;
        if (values.device) {
            const val = DeviceOptions.filter((el) => el.key === values.device);
            if (val?.[0]?.value) {
                name += ` - ${val[0].value}`;
            }
        }
        if (values.creativeType) {
            const val = CreativeType.filter(
                (el) => el.key === values.creativeType
            );
            if (val?.[0]?.value) {
                name += ` - ${val[0].value}`;
            }
        }
        if (values.adName) name += ` - ${values.adName}`;

        let data;
        if (campaignFacebookObjective === "CONVERSIONS") {
            data = {
                name: name,
                bidAmount: parseInt(values.bidAmount) * 100,
                lifetimeBudget: parseInt(values.lifeTimeBudget) * 100,
                startTime: values.startDate,
                endTime: values.endDate,
                optimizationGoal: values.optimizationGoal,
                eventType: values.eventType,
                pixelId: values.pixelId,
                detail: {
                    campaignName: values.campaignName,
                    channel: "FACEBOOK",
                    lead: values.isLead ? "lead" : "",
                    adCategory: values.adCategory,
                    targetingMethod: values.targetingMethod,
                    location: values.location,
                    audience: values.audience,
                    promo: values.promo,
                    device: values.device,
                    creativeType: values.creativeType,
                    adName: values.adName,
                },
            };
        } else {
            data = {
                name: name,
                bidAmount: parseInt(values.bidAmount) * 100,
                lifetimeBudget: parseInt(values.lifeTimeBudget) * 100,
                startTime: values.startDate,
                endTime: values.endDate,
                optimizationGoal: values.optimizationGoal,
                detail: {
                    campaignName: values.campaignName,
                    channel: "FACEBOOK",
                    lead: values.isLead ? "lead" : "",
                    adCategory: values.adCategory,
                    targetingMethod: values.targetingMethod,
                    location: values.location,
                    audience: values.audience,
                    promo: values.promo,
                    device: values.device,
                    creativeType: values.creativeType,
                    adName: values.adName,
                },
            };
        }

        await instance({
            method: "POST",
            url: `/client/${clientId}/campaign-brief/${campaignId}/fb-campaign/${fbData?.id}/fb-ad-set`,
            data: data,
        })
            .then((response) => {
                if (response.status === 200) {
                    toast({
                        isClosable: true,
                        title: "Success",
                        status: "success",
                        variant: "top-accent",
                        position: "top-right",
                        description: response.data.data.message,
                    });
                    actions.resetForm();
                    onClose();
                }
            })
            .catch((error) => {
                toast({
                    isClosable: true,
                    title: "Error",
                    status: "error",
                    variant: "top-accent",
                    position: "top-right",
                    description: error.response.data.message,
                });
            });
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered size="2xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    css={css({
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#757998",
                        marginTop: "20px",
                    })}
                >
                    Create Facebook Ad Set
                </ModalHeader>
                <ModalCloseButton onClick={() => {}} />
                <Formik
                    enableReinitialize
                    initialValues={fbAdSetInitialValue(fbData)}
                    validationSchema={
                        campaignFacebookObjective === "CONVERSIONS"
                            ? conversionsValidationSchema
                            : validationSchema
                    }
                    onSubmit={onSubmit}
                >
                    {({
                        dirty,
                        isValid,
                        isSubmitting,
                        values,
                        handleChange,
                    }) => {
                        return (
                            <Form autoComplete="off">
                                <ModalBody>
                                    <div
                                        style={{
                                            height: "3px",
                                            width: "100%",
                                            background:
                                                "rgba(167, 169, 189, 0.3)",
                                        }}
                                    ></div>
                                </ModalBody>
                                <ModalBody>
                                    <Grid
                                        mt={3}
                                        templateColumns={{
                                            base: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="campaign_name"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                    })}
                                                >
                                                    Campaign Name{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="campaign_name"
                                                    name="campaignName"
                                                    placeholder="Example 2022"
                                                    value={values.campaignName}
                                                    onChange={handleChange}
                                                    css={css({
                                                        color: "#757998",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="channel"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Channel{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputGroup>
                                                    <Input
                                                        id="channel"
                                                        name="channel"
                                                        placeholder="Facebook"
                                                        disabled
                                                        css={css({
                                                            borderRadius: "0",
                                                            border: "2px solid #757998",
                                                            fontWeight: "600",
                                                            fontSize: "14px",
                                                            lineHeight: "16px",
                                                            color: "#757998",
                                                        })}
                                                    />
                                                    <InputRightElement
                                                        children={
                                                            <LockIcon color="#757998" />
                                                        }
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem alignSelf={"end"}>
                                            <CheckboxControl
                                                colorScheme="pink"
                                                name="isLead"
                                                value={values?.isLead.toString()}
                                                onChange={handleChange}
                                                css={css({
                                                    fontWeight: "600",
                                                    fontSize: "12px",
                                                    lineHeight: "15px",
                                                    color: "#757998",
                                                })}
                                            >
                                                Lead?
                                            </CheckboxControl>
                                        </GridItem>
                                    </Grid>
                                    <Grid
                                        mt={3}
                                        templateColumns={{
                                            base: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="adCategory"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Ad Category
                                                </FormLabel>
                                                <SelectControl
                                                    id="adCategory"
                                                    name="adCategory"
                                                    value={values.adCategory}
                                                    onChange={handleChange}
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
                                                    }}
                                                >
                                                    {AdCategory.map((el) => (
                                                        <option
                                                            key={el.key}
                                                            value={el.key}
                                                        >
                                                            {el.value}
                                                        </option>
                                                    ))}
                                                </SelectControl>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="targetingMethod"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Targeting Method{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <SelectControl
                                                    id="targetingMethod"
                                                    name="targetingMethod"
                                                    value={
                                                        values.targetingMethod
                                                    }
                                                    onChange={handleChange}
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
                                                    }}
                                                >
                                                    {TargetingMethod.map(
                                                        (el) => (
                                                            <option
                                                                key={el.key}
                                                                value={el.key}
                                                            >
                                                                {el.value}
                                                            </option>
                                                        )
                                                    )}
                                                </SelectControl>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="location"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Location{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="location"
                                                    name="location"
                                                    placeholder="Middle Earth"
                                                    onChange={handleChange}
                                                    value={values.location}
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "14px",
                                                        color: "#757998",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                    <Grid
                                        mt={3}
                                        templateColumns={{
                                            base: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="audience"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Audience{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="audience"
                                                    name="audience"
                                                    placeholder="Families"
                                                    value={values.audience}
                                                    onChange={handleChange}
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "14px",
                                                        color: "#757998",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="promo"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Promo
                                                </FormLabel>
                                                <InputBox
                                                    id="promo"
                                                    name="promo"
                                                    placeholder="Bogo"
                                                    value={values.promo}
                                                    onChange={handleChange}
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "14px",
                                                        color: "#757998",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="device"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Device{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <SelectControl
                                                    id="device"
                                                    name="device"
                                                    value={values.device}
                                                    onChange={handleChange}
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
                                                    }}
                                                >
                                                    {DeviceOptions.map((el) => (
                                                        <option
                                                            key={el.key}
                                                            value={el.key}
                                                        >
                                                            {el.value}
                                                        </option>
                                                    ))}
                                                </SelectControl>
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                    <Grid
                                        mt={3}
                                        templateColumns={{
                                            base: "repeat(1, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="creativeType"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Creative Type{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <SelectControl
                                                    id="creativeType"
                                                    name="creativeType"
                                                    value={values.creativeType}
                                                    onChange={handleChange}
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
                                                    }}
                                                >
                                                    {CreativeType.map((el) => (
                                                        <option
                                                            key={el.key}
                                                            value={el.key}
                                                        >
                                                            {el.value}
                                                        </option>
                                                    ))}
                                                </SelectControl>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem colSpan={2}>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="adName"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                    })}
                                                >
                                                    Ad Name{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="adName"
                                                    name="adName"
                                                    placeholder="Serenity Now"
                                                    value={values.adName}
                                                    onChange={handleChange}
                                                    css={css({
                                                        color: "#757998",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                    <Grid
                                        mt={3}
                                        templateColumns={{
                                            base: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="startDate"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Start Date{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="startDate"
                                                    name="startDate"
                                                    type="date"
                                                    value={values.startDate}
                                                    onChange={handleChange}
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "14px",
                                                        color: "#757998",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="endDate"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    End Date{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="endDate"
                                                    name="endDate"
                                                    type="date"
                                                    value={values.endDate}
                                                    onChange={handleChange}
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "14px",
                                                        color: "#757998",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="bidAmount"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                    })}
                                                >
                                                    Bid Amount{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="bidAmount"
                                                    name="bidAmount"
                                                    placeholder="$100"
                                                    value={values.bidAmount}
                                                    onChange={handleChange}
                                                    css={css({
                                                        color: "#757998",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
                                    <Grid
                                        mt={3}
                                        templateColumns={{
                                            base: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="lifeTimeBudget"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                    })}
                                                >
                                                    Lifetime Budget{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <InputBox
                                                    id="lifeTimeBudget"
                                                    name="lifeTimeBudget"
                                                    placeholder="$1,000,000"
                                                    value={
                                                        values.lifeTimeBudget
                                                    }
                                                    onChange={handleChange}
                                                    css={css({
                                                        color: "#757998",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="optimizationGoal"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Optimization Goal{" "}
                                                    <span
                                                        style={{
                                                            color: "#FFB8B8",
                                                        }}
                                                    >
                                                        (required)
                                                    </span>
                                                </FormLabel>
                                                <SelectControl
                                                    id="optimizationGoal"
                                                    name="optimizationGoal"
                                                    value={
                                                        values.optimizationGoal
                                                    }
                                                    onChange={handleChange}
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
                                                    }}
                                                >
                                                    {fbObjective.map((el) => (
                                                        <option
                                                            key={el.key}
                                                            value={el.key}
                                                        >
                                                            {el.value}
                                                        </option>
                                                    ))}
                                                </SelectControl>
                                            </FormControl>
                                        </GridItem>
                                        {campaignFacebookObjective ===
                                            "CONVERSIONS" && (
                                            <GridItem>
                                                <FormControl>
                                                    <FormLabel
                                                        htmlFor="eventType"
                                                        css={css({
                                                            fontWeight: "600",
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#A7A9BD",
                                                            marginBottom: "5px",
                                                        })}
                                                    >
                                                        Event Type{" "}
                                                        <span
                                                            style={{
                                                                color: "#FFB8B8",
                                                            }}
                                                        >
                                                            (required)
                                                        </span>
                                                    </FormLabel>
                                                    <SelectControl
                                                        id="eventType"
                                                        name="eventType"
                                                        value={values.eventType}
                                                        onChange={handleChange}
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
                                                        }}
                                                    >
                                                        {EventType.map((el) => (
                                                            <option
                                                                key={el.key}
                                                                value={el.key}
                                                            >
                                                                {el.value}
                                                            </option>
                                                        ))}
                                                    </SelectControl>
                                                </FormControl>
                                            </GridItem>
                                        )}
                                    </Grid>
                                    {campaignFacebookObjective ===
                                        "CONVERSIONS" && (
                                        <Grid mt={3}>
                                            <GridItem>
                                                <FormControl>
                                                    <FormLabel
                                                        htmlFor="pixelId"
                                                        css={css({
                                                            fontWeight: "600",
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#A7A9BD",
                                                            marginBottom: "5px",
                                                        })}
                                                    >
                                                        Pixel ID{" "}
                                                        <span
                                                            style={{
                                                                color: "#FFB8B8",
                                                            }}
                                                        >
                                                            (required)
                                                        </span>
                                                    </FormLabel>
                                                    <SelectControl
                                                        id="pixelId"
                                                        name="pixelId"
                                                        value={values.pixelId}
                                                        onChange={handleChange}
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
                                                        }}
                                                    >
                                                        {pixelIds.map(
                                                            (el, index) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        el.pixelId
                                                                    }
                                                                >
                                                                    {el.pixelId}
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectControl>
                                                </FormControl>
                                            </GridItem>
                                        </Grid>
                                    )}
                                </ModalBody>
                                <Flex mt={5}>
                                    <Button
                                        onClick={onClose}
                                        css={css({
                                            width: "50%",
                                            borderTopLeftRadius: "0",
                                            borderTopRightRadius: "0",
                                            borderBottomRightRadius: "0",
                                            background:
                                                "rgba(167, 169, 189, 0.3) !important",
                                            color: "#757998",
                                        })}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={
                                            !(dirty && isValid) || isSubmitting
                                        }
                                        css={css({
                                            width: "50%",
                                            borderTopLeftRadius: "0",
                                            borderTopRightRadius: "0",
                                            borderBottomLeftRadius: "0",
                                            background: "#59AB9E !important",
                                            color: "white",
                                        })}
                                    >
                                        Submit
                                    </Button>
                                </Flex>
                            </Form>
                        );
                    }}
                </Formik>
            </ModalContent>
        </Modal>
    );
};

export default FbAdSetModel;
