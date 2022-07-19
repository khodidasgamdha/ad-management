import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import InputBox from '../../../components/InputBox'

const CampaignDetails = () => {
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
            label="Campaign Name"
          />
        </GridItem>
        <GridItem>
          <InputBox name="startDate" label="Start Date" type="date" />
        </GridItem>
        <GridItem>
          <InputBox name="endDate" label="End Date" type="date" />
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <InputBox
            name="detail.campaignBasic.duration"
            label="Duration (Days)"
            type="number"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox
            name="detail.campaignBasic.websiteUrl"
            label="Website URL"
            type="url"
          />
        </GridItem>
        <GridItem>
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
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CampaignDetails
