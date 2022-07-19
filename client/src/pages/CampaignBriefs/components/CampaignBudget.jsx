import { Box, Grid, GridItem, Heading, Radio } from '@chakra-ui/react'
import { RadioGroupControl } from 'formik-chakra-ui'
import InputBox from '../../../components/InputBox'
import { CAMPAIGN_BUDGET } from '../../../constant'

const CampaignBudget = () => {
  return (
    <Box bg="green.50" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="green.500">
            Campaign Budget
          </Heading>
        </GridItem>
        {CAMPAIGN_BUDGET.map((input, index) => {
          return (
            <GridItem key={index}>
              <InputBox
                name={input.name}
                type={input.type}
                label={input.placeholder}
              />
            </GridItem>
          )
        })}
        <GridItem>
          <RadioGroupControl
            label="Is Monthly"
            labelProps={{
              fontSize: 'sm',
              color: 'gray',
            }}
            name="detail.campaignBudget.isMonthly"
          >
            <Radio colorScheme="green" value="Yes">
              Yes
            </Radio>
            <Radio colorScheme="green" value="No">
              No
            </Radio>
          </RadioGroupControl>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CampaignBudget
