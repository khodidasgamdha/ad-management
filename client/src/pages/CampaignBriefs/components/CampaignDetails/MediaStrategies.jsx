import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { CheckboxContainer, CheckboxControl } from "formik-chakra-ui";
import InputBox from "../../../../components/InputBox";
import MultiSelectInputBox from "../../../../components/MultiSelectInputBox";
import {
    CampaignInventoryRestriction,
    TargettingOptionDevices,
} from "../../../../constant";

const MediaStrategies = ({ setFieldValue }) => {
    return (
        <Box bg="blue.50" p={4}>
            <Heading fontSize="md" mb={4} color="blue.500">
                Media Strategies
            </Heading>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={12}>
                    <CheckboxContainer
                        name="detail.devices"
                        label="Devices"
                        labelProps={{
                            color: "gray",
                            fontSize: "sm",
                        }}
                        stackProps={{
                            direction: "row",
                            gap: 3,
                            padding: 0,
                        }}
                    >
                        {TargettingOptionDevices.map((family, index) => (
                            <CheckboxControl
                                key={index}
                                colorScheme="blue"
                                name="detail.devices"
                                value={family.value}
                            >
                                {family.label}
                            </CheckboxControl>
                        ))}
                    </CheckboxContainer>
                </GridItem>
                <GridItem colSpan={6}>
                    <InputBox name="detail.language" label="Language, Split?" />
                </GridItem>
                <GridItem colSpan={6}>
                    <InputBox
                        name="detail.tactics"
                        label="Tactics (Retargeting, Lookalike, Lists)"
                    />
                </GridItem>
                <GridItem colSpan={6}>
                    <InputBox
                        name="detail.dayPartingRequirements"
                        label="Day Parting Requirements"
                    />
                </GridItem>
                <GridItem colSpan={6}>
                    <InputBox
                        name="detail.optimizationExclusions"
                        label="Optimization Exclusions?"
                    />
                </GridItem>
                <GridItem colSpan={12}>
                    <InputBox
                        name="detail.frequencyCapping"
                        label="Frequency Capping (We recommend 1x/24 hours or 2x/24 hours for Retargeting)"
                    />
                </GridItem>
                <GridItem colSpan={12}>
                    <MultiSelectInputBox
                        label="Inventory Restrictions/Digital Content Labels"
                        name="detail.inventoryRestrictions"
                        options={CampaignInventoryRestriction}
                        placeholder={`Select Inventory...`}
                        onChange={(e) =>
                            setFieldValue(
                                "detail.inventoryRestrictions",
                                e.map((v) => v["value"])
                            )
                        }
                    />
                </GridItem>
                <GridItem colSpan={6}>
                    <InputBox name="detail.whitelist" label="Placement" />
                </GridItem>
                <GridItem colSpan={6}>
                    <InputBox
                        name="detail.blacklist"
                        label="Placement Exclusions"
                    />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default MediaStrategies;
