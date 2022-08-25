import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import {
  CheckboxContainer,
  CheckboxControl,
  SelectControl,
} from "formik-chakra-ui";
import InputBox from "../../../../components/InputBox";
import TextAreaBox from "../../../../components/TextAreaBox";
import {
  CampaignKPI,
  CampaignObjective,
  CampaignPriceModel,
} from "../../../../constant";

const CampaignMetrics = () => {
  return (
    <Box bg="pink.50" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="pink.500">
            Campaign Metrics
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel htmlFor="detail.priceModel" color="gray" fontSize="sm">
            Price Model
          </FormLabel>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {CampaignPriceModel.map((priceModal, index) => (
              <GridItem key={index} colSpan={1}>
                <CheckboxControl
                  key={index}
                  colorScheme="pink"
                  name="detail.priceModel"
                  value={priceModal.value}
                >
                  {priceModal.label}
                </CheckboxControl>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem colSpan={2}>
          <CheckboxContainer
            name="detail.Kpis"
            label="KPIs"
            stackProps={{
              padding: 0,
              direction: { base: "column", lg: "row" },
            }}
            labelProps={{
              fontSize: "sm",
              color: "gray",
            }}
          >
            {CampaignKPI.map((priceModal, index) => (
              <CheckboxControl
                key={index}
                colorScheme="pink"
                name="detail.Kpis"
                value={priceModal.value}
              >
                {priceModal.label}
              </CheckboxControl>
            ))}
          </CheckboxContainer>
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox
            name="detail.customMetricsAndGoals"
            label="Metrics/Goals to Reach & Exceed (Required)"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <TextAreaBox
            name="detail.campaignConverterNotes"
            label="Campaign Converters"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CheckboxContainer
            name="detail.campaignConverters"
            stackProps={{
              padding: 0,
              direction: { base: "column", xl: "row" },
              gap: 6,
            }}
            labelProps={{
              fontSize: "sm",
              color: "gray",
            }}
          >
            {[
              { value: "Include", label: "Include Converters" },
              { value: "Exclude", label: "Exclude Converters" },
            ].map((priceModal, index) => (
              <CheckboxControl
                key={index}
                colorScheme="pink"
                name="detail.campaignConverters"
                value={priceModal.value}
              >
                {priceModal.label}
              </CheckboxControl>
            ))}
          </CheckboxContainer>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="detail.objective" color="gray" fontSize="sm">
              What is the main facebook objective for this campaign? (Required)
            </FormLabel>
            <SelectControl
              id="detail.objective"
              name="detail.objective"
              selectProps={{
                placeholder: "Select objective",
                variant: "outline",
                border: "2px",
                borderRadius: 0,
                borderColor: "gray",
              }}
            >
              {CampaignObjective.map((objective) => (
                <option key={objective.value} value={objective.value}>
                  {objective.label}
                </option>
              ))}
            </SelectControl>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <TextAreaBox
            name="detail.conversionMeasurement"
            label="What is being measured and how will the campaign be assessed? (Required)"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CampaignMetrics;
