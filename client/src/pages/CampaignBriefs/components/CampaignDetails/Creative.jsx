import {
    Box,
    Checkbox,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Radio,
} from "@chakra-ui/react";
import { RadioGroupControl } from "formik-chakra-ui";
import React from "react";
import InputBox from "../../../../components/InputBox";
import MultiSelectInputBox from "../../../../components/MultiSelectInputBox";
import "../../style/CampaignDetails.css";
import { CreativeUnit, CreativeSizes } from "../../constant/SelectValues"

const Creative = () => {
    return (
        <Box bg="orange.50" p={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <Heading fontSize="md" color="orange.500">
                        Creative
                    </Heading>
                </GridItem>
                <GridItem>
                    <MultiSelectInputBox
                        options={CreativeUnit}
                        label="Creative Unit"
                        name="detail.creativeUnit"
                        placeholder={`Select...`}
                    />
                </GridItem>
                <GridItem>
                    <MultiSelectInputBox
                        options={CreativeSizes}
                        label="What creative sizes will we have access to?"
                        name="detail.creativeSize"
                        placeholder={`Select...`}
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox
                        name="detail.linkToAdServing"
                        label="Link to Ad Serving"
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <Box className="creative-item">
                        <FormLabel color="gray" fontSize="sm">
                            Can we pixel your landing page? (Conversion, Events,
                            and Re targeting)
                        </FormLabel>
                        <RadioGroupControl name="detail.canPixelLandingPage">
                            <Radio colorScheme="yellow" value="Yes">
                                Yes
                            </Radio>
                            <Radio colorScheme="yellow" value="No">
                                No
                            </Radio>
                        </RadioGroupControl>
                    </Box>
                    <Box className="creative-item">
                        <FormLabel color="gray" fontSize="sm">
                            Do you use Google Tag Manager?
                        </FormLabel>
                        <Checkbox colorScheme="yellow">Yes</Checkbox>
                        <InputBox name="detail.googleTagManager" />
                    </Box>
                    <Box className="creative-item">
                        <FormLabel color="gray" fontSize="sm">
                            Number of “Unique Page views” per month
                        </FormLabel>
                        <InputBox name="detail.numUniquePageViews" />
                    </Box>
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox
                        name="detail.numberOfCreativeExecutions"
                        label="Number Of Creative Executions"
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox name="detail.socialPage" label="Social Page" />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Creative;
