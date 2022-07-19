import { Box, Grid, GridItem, Heading, Radio } from '@chakra-ui/react'
import { RadioGroupControl } from 'formik-chakra-ui'
import InputBox from '../../../components/InputBox'
import TextAreaBox from '../../../components/TextAreaBox'

const ClientDetails = () => {
  return (
    <Box bg="blue.50" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="blue.500">
            Client Details
          </Heading>
        </GridItem>
        <GridItem>
          <InputBox
            name="detail.industryBasic.companyName"
            label="Company name"
          />
        </GridItem>
        <GridItem>
          <InputBox name="detail.industryBasic.phone" label="Phone number" />
        </GridItem>
        <GridItem>
          <InputBox
            name="detail.industryBasic.contactName"
            label="Contact name"
          />
        </GridItem>
        <GridItem>
          <InputBox name="detail.industryBasic.email" label="Email address" />
        </GridItem>
        <GridItem rowSpan={2}>
          <TextAreaBox name="detail.industryBasic.address" label="Address" />
        </GridItem>
        <GridItem>
          <InputBox
            name="detail.industryBasic.productAndServices"
            label="Industry | Product & Services "
          />
        </GridItem>
        <GridItem>
          <RadioGroupControl name="detail.industryBasic.industryType">
            <Radio value="B2B">B2B</Radio>
            <Radio value="B2C">B2C</Radio>
          </RadioGroupControl>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default ClientDetails
