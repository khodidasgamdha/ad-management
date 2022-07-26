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
    console.log(values);
    useEffect(() => {
        if(
            values?.detail?.campaignBasic?.startDate && 
            values?.detail?.campaignBasic?.endDate
        ) {
            const startDate = moment(values.detail.campaignBasic.startDate);
            const endDate = moment(values.detail.campaignBasic.endDate);
            const diff = endDate.diff(startDate, 'days');
            setDuration(diff+1)
            setFieldValue('detail.campaignBasic.duration', duration)
        }
    }, [values.detail.campaignBasic.startDate, values.detail.campaignBasic.endDate])

    return (
        <Box bg="orange.50" p={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <Heading fontSize="md" color="orange.400">
                        Campaign Details
                    </Heading>
                </GridItem>
                <GridItem colSpan={2}>
                    <InputBox 
                        name="detail.campaignBasic.campaignName" 
                        label="Campaign Name (Required)" 
                        onChange={(e) => {
                            setFieldValue('detail.campaignBasic.campaignName', e.target.value)
                            setFieldValue('name', e.target.value)
                        }}
                    />
                </GridItem>
                <GridItem>
                    <InputBox
                        name="detail.campaignBasic.startDate"
                        label="Start Date (Required)"
                        type="date"
                        onChange={(e) => {
                            setFieldValue('detail.campaignBasic.startDate', e.target.value)
                            setFieldValue('startDate', e.target.value)
                        }}
                    />
                </GridItem>
                <GridItem>
                    <InputBox
                        name="detail.campaignBasic.endDate"
                        label="End Date (Required)"
                        type="date"
                        onChange={(e) => {
                            setFieldValue('detail.campaignBasic.endDate', e.target.value)
                            setFieldValue('endDate', e.target.value)
                        }}
                    />
                </GridItem>
                <GridItem mt={8} display="flex" justifyContent="end" alignItems="center">
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
                        label="Website URL (Required)"
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
                            name="detail.campaignBasic.landingPageDocLink"
                            type="url"
                        />
                    </Box>
                    <Box className="url-item">
                        <FormLabel color="gray" fontSize="sm">
                            Mobile Landing Page URL
                        </FormLabel>
                        <Checkbox colorScheme="yellow"></Checkbox>
                        <InputBox
                            name="detail.campaignBasic.landingPageMobileLink"
                            type="url"
                        />
                    </Box>
                    <Box className="url-item">
                        <FormLabel color="gray" fontSize="sm">
                            Exit/Thank You Page URL
                        </FormLabel>
                        <Checkbox colorScheme="yellow"></Checkbox>
                        <InputBox
                            name="detail.campaignBasic.thankYouLink"
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
