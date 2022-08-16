import { Box, FormLabel, Grid, GridItem, Heading } from "@chakra-ui/react";
import InputBox from "../../../../components/InputBox";
import { Checkbox } from "@chakra-ui/react";
import "../../style/CampaignDetails.css";
import { TbEqual } from 'react-icons/tb'
import { useState } from "react";
import { useEffect } from "react";
import moment from 'moment'

const CampaignDetails = ({ setFieldValue, values }) => {
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        if(
            values?.detail?.campaignBasic?.startDate && 
            values?.detail?.campaignBasic?.endDate
        ) {
            const startDate = moment(values.detail.campaignBasic.startDate);
            const endDate = moment(values.detail.campaignBasic.endDate);
            const diff = endDate.diff(startDate, 'days');
            setDuration(diff)
            setFieldValue('detail.campaignBasic.duration', duration)
        }
    }, [values.detail.campaignBasic])

    return (
        <Box bg="orange.50" p={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <Heading fontSize="md" color="orange.400">
                        Campaign Details
                    </Heading>
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox name="name" label="Campaign Name" />
                </GridItem>
                <GridItem>
                    <InputBox
                        name="detail.campaignBasic.startDate"
                        label="Start Date"
                        type="date"
                    />
                </GridItem>
                <GridItem>
                    <InputBox
                        name="detail.campaignBasic.endDate"
                        label="End Date"
                        type="date"
                    />
                </GridItem>
                <GridItem display="flex" justifyContent="end" alignItems="center">
                    <TbEqual />
                </GridItem>
                <GridItem>
                    <InputBox
                        name="detail.campaignBasic.duration"
                        label="Duration (Days)"
                        type="number"
                        value={duration}
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox
                        name="detail.campaignBasic.websiteUrl"
                        label="Website URL"
                        type="url"
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <Box className="url-item">
                        <FormLabel color="gray" fontSize="sm">
                            Link to Landing Page Document
                        </FormLabel>
                        <Checkbox colorScheme="yellow"></Checkbox>
                        <InputBox
                            name="detail.campaignBasic.websiteUrl"
                            type="url"
                        />
                    </Box>
                    <Box className="url-item">
                        <FormLabel color="gray" fontSize="sm">
                            Mobile Landing Page URL
                        </FormLabel>
                        <Checkbox colorScheme="yellow"></Checkbox>
                        <InputBox
                            name="detail.campaignBasic.websiteUrl"
                            type="url"
                        />
                    </Box>
                    <Box className="url-item">
                        <FormLabel color="gray" fontSize="sm">
                            Exit/Thank You Page URL
                        </FormLabel>
                        <Checkbox colorScheme="yellow"></Checkbox>
                        <InputBox
                            name="detail.campaignBasic.websiteUrl"
                            type="url"
                        />
                    </Box>
                </GridItem>
                {/* <GridItem>
                    <InputBox
                        name="detail.campaignBasic.landingPageDocLink"
                        label="Link to Landing Page Document"
                        type="url"
                    />
                </GridItem>
                <GridItem>
                    <InputBox
                        name="detail.campaignBasic.landingPageMobileLink"
                        label="Mobile Landing Page URL"
                        type="url"
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox
                        name="detail.campaignBasic.thankYouLink"
                        label="Exit/Thank You Page URL"
                        type="url"
                    />
                </GridItem> */}
            </Grid>
        </Box>
    );
};

export default CampaignDetails;
