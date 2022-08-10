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
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { CheckboxControl, SelectControl } from "formik-chakra-ui";
import { LockIcon } from "@chakra-ui/icons";
import {
    AdCategory,
    TargetingMethod,
    CreativeType,
    Months,
} from "../../constant/SelectValues";
import instance from "../../../../helpers/axios";
import InputBox from "../../../../components/InputBox";
import validationSchema from "../../../../validations/CampaignBrief/FacebookCampaignModel";
import { facebookModelInitialValues } from "../../constant/InitialValues";

const CreateFacebookCampaign = ({ isOpen, onClose, clientId, data }) => {
    const toast = useToast();

    const onSubmit = async (values, actions) => {
        let name = "WR";
        if (values.campaignName) name += ` - ${values.campaignName}`;
        if (values.month) name += ` - ${values.month}`;
        name += " - FACEBOOK";
        if (values.isLead) name += `- Lead`;
        if (values.category) {
            const val = AdCategory.filter((el) => el.key === values.category);
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
        if (values.creativeType) {
            const val = CreativeType.filter(
                (el) => el.key === values.creativeType
            );
            if (val?.[0]?.value) {
                name += ` - ${val[0].value}`;
            }
        }
        if (values.location) name += `- ${values.location}`;
        if (values.segment) name += `- ${values.segment}`;

        await instance({
            method: "POST",
            url: `/client/${clientId}/campaign-brief/${data?.id}/fb-campaign`,
            data: {
                detail: {
                    adCategory: values.category,
                    audience: values.segment,
                    campaignName: values.campaignName,
                    chennel: "FACEBOOK",
                    creativeType: values.creativeType,
                    identificator: "WR",
                    lead: values.isLead ? "LEAD" : "",
                    location: values.location,
                    month: values.month,
                    objective: "LINK_CLICKS",
                    targetingMethod: values.targetingMethod,
                },
                name: name,
            },
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
                    Create Facebook Campaign
                </ModalHeader>
                <ModalCloseButton onClick={() => {}} />
                <Formik
                    enableReinitialize
                    initialValues={facebookModelInitialValues(data)}
                    validationSchema={validationSchema}
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
                                    <Grid templateColumns="repeat(1, 1fr)">
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
                                                    htmlFor="month"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Month
                                                </FormLabel>
                                                <SelectControl
                                                    id="month"
                                                    name="month"
                                                    value={values.month}
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
                                                    {Months.map((el) => (
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
                                                    htmlFor="campaign_name"
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
                                                        id="campaign_name"
                                                        name="campaign_name"
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
                                                value={values.isLead.toString()}
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
                                            base: "repeat(1, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap={4}
                                    >
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="category"
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
                                                    id="category"
                                                    name="category"
                                                    value={values.category}
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
                                                    htmlFor="location"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Location
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
                                        <GridItem>
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="segment"
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "12px",
                                                        lineHeight: "15px",
                                                        color: "#A7A9BD",
                                                        marginBottom: "5px",
                                                    })}
                                                >
                                                    Audience Segment
                                                </FormLabel>
                                                <InputBox
                                                    id="segment"
                                                    name="segment"
                                                    placeholder="Families"
                                                    value={values.segment}
                                                    onChange={handleChange}
                                                    css={css({
                                                        fontWeight: "600",
                                                        fontSize: "14px",
                                                        color: "#757998",
                                                    })}
                                                />
                                            </FormControl>
                                        </GridItem>
                                    </Grid>
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

export default CreateFacebookCampaign;
