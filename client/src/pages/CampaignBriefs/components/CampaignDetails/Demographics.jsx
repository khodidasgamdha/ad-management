import {
  Box,
  Checkbox,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Radio,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import {
  CheckboxContainer,
  CheckboxControl,
  RadioGroupControl,
} from "formik-chakra-ui";
import { useState } from "react";
import CheckBoxComponent from "../../../../components/CheckBoxComponent";
import InputBox from "../../../../components/InputBox";
import MultiSelectInputBox from "../../../../components/MultiSelectInputBox";
import TextAreaBox from "../../../../components/TextAreaBox";
import {
  BEHAVIOR,
  CampaignAgeGroup,
  FamilyOption,
  IncomeOptionFbInstaUS,
  IncomeOptionSearchDisplay,
  INTEREST_TOPIC_TARGETING,
  TargettingLocationOptions,
  TargettingLocationRadius,
  TargettingOptionContext,
} from "../../../../constant";
import "../../style/CampaignDetails.css";

const Demographics = ({ setFieldValue, ...props }) => {
  const [fbIncomeRange, setFbIncomeRange] = useState(false);

  return (
    <Box bg="purple.50" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" mb={4} gap={4}>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="purple.500">
            Demographics
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <CheckBoxComponent
            oprions={["Female", "Male", "Unknown"]}
            name="detail.demographyDetails.gender"
            label="Gender"
            colorScheme="purple"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CheckboxContainer
            name="detail.demographyDetails.ageGroup"
            label="Age"
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
            {CampaignAgeGroup.map((age, index) => (
              <CheckboxControl
                key={index}
                colorScheme="purple"
                name="detail.demographyDetails.ageGroup"
                value={age.value}
              >
                {age.label}
              </CheckboxControl>
            ))}
          </CheckboxContainer>
        </GridItem>
        <GridItem>
          <TextAreaBox name="detail.demographyDetails.other" label="Notes" />
        </GridItem>
        <GridItem>
          <RadioGroupControl
            name="detail.demographyDetails.isRequired"
            label="Is Demographic targeting required for Search?"
            labelProps={{
              color: "gray",
              fontSize: "sm",
            }}
          >
            <Radio colorScheme="purple" value="Yes">
              Yes
            </Radio>
            <Radio colorScheme="purple" value="No">
              No
            </Radio>
          </RadioGroupControl>
        </GridItem>
        <GridItem colSpan={2}>
          <CheckboxContainer
            name="detail.families"
            label="Families"
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
            {FamilyOption.map((family, index) => (
              <CheckboxControl
                key={index}
                colorScheme="purple"
                name="detail.families"
                value={family.value}
              >
                {family.label}
              </CheckboxControl>
            ))}
          </CheckboxContainer>
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox name="detail.familiesCustom" label="Other" />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel color="gray" fontSize="sm">
            Household Income (for U.S. Facebook and Instagram only)
          </FormLabel>
          <Box className="household-income-box">
            <Box className="income-range">
              <RangeSlider
                defaultValue={[0, 0]}
                min={0}
                max={3}
                step={1}
                isDisabled={fbIncomeRange}
                name="detail.householdIncomeDetailsfb"
                onChangeEnd={(val) => {
                  const start = val[0];
                  const end = val[1];
                  const values = IncomeOptionFbInstaUS.slice(
                    start,
                    parseInt(end) + 1
                  );
                  setFieldValue(
                    "detail.householdIncomeDetailsfb",
                    values.map((el) => el.value)
                  );
                }}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Box className="range-text">
                {IncomeOptionFbInstaUS.map((el, index) => (
                  <Text key={index}>{el?.label}</Text>
                ))}
              </Box>
            </Box>
            <Checkbox onChange={() => setFbIncomeRange(!fbIncomeRange)}>
              N / A
            </Checkbox>
          </Box>
          {/* <VStack align="stretch">
                        <CheckboxContainer
                            name="detail.householdIncomeDetailsfb"
                            label="Household Income (for U.S. Facebook and Instagram only)"
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
                            {IncomeOptionFbInstaUS.map((income, index) => (
                                <CheckboxControl
                                    key={index}
                                    colorScheme="purple"
                                    name="detail.householdIncomeDetailsfb"
                                    value={income.value}
                                >
                                    {income.label}
                                </CheckboxControl>
                            ))}
                        </CheckboxContainer>
                    </VStack> */}
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel color="gray" fontSize="sm">
            Household Income (for Search and Display only)
          </FormLabel>
          <Box className="household-income-box">
            <Box className="income-range">
              <RangeSlider
                onChangeEnd={(val) => {
                  const start = val[0];
                  const end = val[1];
                  const values = IncomeOptionSearchDisplay.slice(
                    start,
                    parseInt(end) + 1
                  );
                  setFieldValue(
                    "detail.householdIncomeDetailsSearchDisplay",
                    values.map((el) => el.value)
                  );
                }}
                defaultValue={[0, 0]}
                min={0}
                max={5}
                step={1}
                name="detail.householdIncomeDetailsSearchDisplay"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Box className="range-text">
                {IncomeOptionSearchDisplay.map((el, index) => (
                  <Text key={index}>{el?.label}</Text>
                ))}
              </Box>
            </Box>
          </Box>
          {/* <VStack align="stretch">
            <CheckboxContainer
              name="detail.householdIncomeDetailsSearchDisplay"
              label="Household Income (for Search and Display only)"
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
              {IncomeOptionSearchDisplay.map((income, index) => (
                <CheckboxControl
                  key={index}
                  colorScheme="purple"
                  name="detail.householdIncomeDetailsSearchDisplay"
                  value={income.value}
                >
                  {income.label}
                </CheckboxControl>
              ))}
            </CheckboxContainer>
          </VStack> */}
        </GridItem>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="purple.500">
            Behavioral/Audience Targeting
          </Heading>
          {/* <Text color="purple.300" fontSize="small" mt={3}>
                        What type of online behaviors do they have? Do they play
                        video games? What types of things do these people do?
                    </Text> */}
        </GridItem>
        {BEHAVIOR.map((input) => (
          <GridItem colSpan={input.colSpan} key={input.id}>
            <MultiSelectInputBox
              label={input.label}
              name={input.name}
              options={input.options}
              placeholder={`Select ${input.label}...`}
              onChange={(e) =>
                setFieldValue(
                  input.name,
                  e.map((v) => v["value"])
                )
              }
            />
          </GridItem>
        ))}
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="purple.500">
            Interest/Topic Targeting
          </Heading>
        </GridItem>
        {INTEREST_TOPIC_TARGETING.map((data) => (
          <GridItem colSpan={data.colSpan} key={data.id}>
            <MultiSelectInputBox
              label={data.label}
              name={data.name}
              options={data.options}
              placeholder={`Select ${data.label}...`}
              onChange={(e) =>
                setFieldValue(
                  data.name,
                  e.map((v) => v["value"])
                )
              }
            />
          </GridItem>
        ))}
        <GridItem>
          <InputBox
            label="Work Job Title"
            name="detail.audienceTargetting.interest.workJobTitle"
          />
        </GridItem>
        <GridItem>
          <InputBox
            label="Work Employer"
            name="detail.audienceTargetting.interest.workEmployer"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem>
              <InputBox
                label="Field of Study"
                name="detail.audienceTargetting.interest.fieldOfStudy"
              />
            </GridItem>
            <GridItem>
              <InputBox
                label="School"
                name="detail.audienceTargetting.interest.school"
              />
            </GridItem>
            <GridItem>
              <InputBox
                label="Undergrad Years"
                name="detail.audienceTargetting.interest.undergradYears"
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={2}>
          <MultiSelectInputBox
            label="Contextual/Sites Targeting/White List"
            name="detail.audienceTargetting.contextual"
            options={TargettingOptionContext}
            placeholder={`Select Contextual...`}
            onChange={(e) =>
              setFieldValue(
                "detail.audienceTargetting.contextual",
                e.map((v) => v["value"])
              )
            }
          />
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox
            label="Top 3 Competitors (link URLs)"
            name="detail.competitorLinks"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <TextAreaBox
            label="Keyword List Link (Display and/or Search)"
            name="detail.keywordListLink"
          />
        </GridItem>
        <GridItem>
          <InputBox label="Audience Name(s)" name="detail.audienceNames" />
        </GridItem>
        <GridItem>
          <CheckboxContainer
            name="detail.targettingType"
            label="And/Or Targeting"
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
            {["And", "Or"].map((income, index) => (
              <CheckboxControl
                key={index}
                colorScheme="purple"
                name="detail.targettingType"
                value={income}
              >
                {income}
              </CheckboxControl>
            ))}
          </CheckboxContainer>
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox
            label="Geography (Note: not all locations will be available on all channels)"
            name="detail.geography"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CheckboxContainer
            name="detail.location"
            label="Location"
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
            {TargettingLocationOptions.map((location, index) => (
              <CheckboxControl
                key={index}
                colorScheme="purple"
                name="detail.location"
                value={location.value}
                label={location.label}
                aria-label={location.label}
              />
            ))}
          </CheckboxContainer>
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel color="gray" fontSize="sm">
            Radius (social)
          </FormLabel>
          <Box className="household-income-box">
            <Box className="income-range">
              <RangeSlider
                defaultValue={[0, 0]}
                min={0}
                max={4}
                step={1}
                onChangeEnd={(val) => {
                  const start = val[0];
                  const end = val[1];
                  const values = TargettingLocationRadius.slice(
                    start,
                    parseInt(end) + 1
                  );
                  setFieldValue(
                    "detail.radius",
                    values.map((el) => el.value)
                  );
                }}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Box className="range-text">
                {TargettingLocationRadius.map((el, index) => (
                  <Text key={index}>{el?.label}</Text>
                ))}
              </Box>
            </Box>
          </Box>
          {/* <CheckboxContainer
            name="detail.radius"
            label="Radius (social)"
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
            {TargettingLocationRadius.map((radius, index) => (
              <CheckboxControl
                key={index}
                colorScheme="purple"
                name="detail.radius"
                value={radius.value}
                label={radius.label}
                aria-label={radius.label}
              />
            ))}
          </CheckboxContainer> */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Demographics;
