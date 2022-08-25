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
import { useEffect, useState } from "react";
import CheckBoxComponent from "../../../../components/CheckBoxComponent";
import InputBox from "../../../../components/InputBox";
import MultiSelectInputBox from "../../../../components/MultiSelectInputBox";
import TextAreaBox from "../../../../components/TextAreaBox";
import {
  CampaignAgeGroup,
  FamilyOption,
  IncomeOptionFbInstaUS,
  IncomeOptionSearchDisplay,
  TargettingLocationOptions,
  TargettingLocationRadius,
  TargettingOptionAffinity,
  TargettingOptionAutomative,
  TargettingOptionB2B,
  TargettingOptionBusiness,
  TargettingOptionCharitable,
  TargettingOptionContext,
  TargettingOptionDigital,
  TargettingOptionEducation,
  TargettingOptionEntertainment,
  TargettingOptionExpat,
  TargettingOptionFamily,
  TargettingOptionFinancial,
  TargettingOptionFitness,
  TargettingOptionFood,
  TargettingOptionHobby,
  TargettingOptionInMarket,
  TargettingOptionJobRole,
  TargettingOptionMedia,
  TargettingOptionMobile,
  TargettingOptionPurchase,
  TargettingOptionRelationshipGender,
  TargettingOptionRelationshipType,
  TargettingOptionResidential,
  TargettingOptionSeasonal,
  TargettingOptionShopping,
  TargettingOptionSports,
  TargettingOptionTechnology,
  TargettingOptionTravel,
  TargettingOptionWork,
} from "../../../../constant";
import "../../style/CampaignDetails.css";

const Demographics = ({ setFieldValue, values }) => {
  const [fbIncomeRange, setFbIncomeRange] = useState(false);
  const [selectedContextual, setSelectedContextual] = useState([]);
  const [selectedAffinity, setSelectedAffinity] = useState([]);
  const [selectedInMarket, setSelectedInMarket] = useState([]);
  const [selectedAutomotive, setSelectedAutomotive] = useState([]);
  const [selectedCharitableDonations, setSelectedCharitableDonations] = useState([]);
  const [selectedExpats, setSelectedExpats] = useState([]);
  const [selectedJobRole, setSelectedJobRole] = useState([]);
  const [selectedMobileDeviceUser, setSelectedMobileDeviceUser] = useState([]);
  const [selectedTravel, setSelectedTravel] = useState([]);
  const [selectedB2B, setSelectedB2B] = useState([]);
  const [selectedDigitalActivities, setSelectedDigitalActivities] = useState([]);
  const [selectedFinancial, setSelectedFinancial] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [selectedPurchaseBehaviour, setSelectedPurchaseBehaviour] = useState([]);
  const [selectedResidentialProfiles, setSelectedResidentialProfiles] = useState([]);
  const [selectedSeasonalEvents, setSelectedSeasonalEvents] = useState([]);
  const [selectedBusinessIndustry, setSelectedBusinessIndustry] = useState([]);
  const [selectedEntertainment, setSelectedEntertainment] = useState([]);
  const [selectedFamilyRelationship, setSelectedFamilyRelationship] = useState([]);
  const [selectedFitnessWellness, setSelectedFitnessWellness] = useState([]);
  const [selectedFoodDrink, setSelectedFoodDrink] = useState([]);
  const [selectedHobbiesActivities, setSelectedHobbiesActivities] = useState([]);
  const [selectedShoppingFashion, setSelectedShoppingFashion] = useState([]);
  const [selectedSportsOutdoors, setSelectedSportsOutdoors] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedRelationshipGender, setSelectedRelationshipGender] = useState([]);
  const [selectedRelationshipType, setSelectedRelationshipType] = useState([]);
  const [selectedWork, setSelectedWork] = useState([]);

  useEffect(() => {
    if (values?.detail?.audienceTargetting?.contextual?.length) {
        setSelectedContextual(
            values.detail.audienceTargetting.contextual.map((el) => {
                const id = TargettingOptionContext.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.contextual]);

  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.affinity?.length) {
        setSelectedAffinity(
            values.detail.audienceTargetting.behavior.affinity.map((el) => {
                const id = TargettingOptionAffinity.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.affinity]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.inMarket?.length) {
        setSelectedInMarket(
            values.detail.audienceTargetting.behavior.inMarket.map((el) => {
                const id = TargettingOptionInMarket.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.inMarket]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.automotive?.length) {
        setSelectedAutomotive(
            values.detail.audienceTargetting.behavior.automotive.map((el) => {
                const id = TargettingOptionAutomative.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.automotive]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.charitableDonations?.length) {
        setSelectedCharitableDonations(
            values.detail.audienceTargetting.behavior.charitableDonations.map((el) => {
                const id = TargettingOptionCharitable.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.charitableDonations]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.expats?.length) {
        setSelectedExpats(
            values.detail.audienceTargetting.behavior.expats.map((el) => {
                const id = TargettingOptionExpat.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.expats]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.jobRole?.length) {
        setSelectedJobRole(
            values.detail.audienceTargetting.behavior.jobRole.map((el) => {
                const id = TargettingOptionJobRole.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.jobRole]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.mobileDeviceUser?.length) {
        setSelectedMobileDeviceUser(
            values.detail.audienceTargetting.behavior.mobileDeviceUser.map((el) => {
                const id = TargettingOptionMobile.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.mobileDeviceUser]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.travel?.length) {
        setSelectedTravel(
            values.detail.audienceTargetting.behavior.travel.map((el) => {
                const id = TargettingOptionTravel.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.travel]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.businessToBusiness?.length) {
        setSelectedB2B(
            values.detail.audienceTargetting.behavior.businessToBusiness.map((el) => {
                const id = TargettingOptionB2B.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.businessToBusiness]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.digitalActivities?.length) {
        setSelectedDigitalActivities(
            values.detail.audienceTargetting.behavior.digitalActivities.map((el) => {
                const id = TargettingOptionDigital.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.digitalActivities]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.financial?.length) {
        setSelectedFinancial(
            values.detail.audienceTargetting.behavior.financial.map((el) => {
                const id = TargettingOptionFinancial.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.financial]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.media?.length) {
        setSelectedMedia(
            values.detail.audienceTargetting.behavior.media.map((el) => {
                const id = TargettingOptionMedia.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.media]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.purchaseBehavior?.length) {
        setSelectedPurchaseBehaviour(
            values.detail.audienceTargetting.behavior.purchaseBehavior.map((el) => {
                const id = TargettingOptionPurchase.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.purchaseBehavior]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.residentialProfiles?.length) {
        setSelectedResidentialProfiles(
            values.detail.audienceTargetting.behavior.residentialProfiles.map((el) => {
                const id = TargettingOptionResidential.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.residentialProfiles]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.behavior?.seasonalAndEvents?.length) {
        setSelectedSeasonalEvents(
            values.detail.audienceTargetting.behavior.seasonalAndEvents.map((el) => {
                const id = TargettingOptionSeasonal.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.behavior?.seasonalAndEvents]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.businessAndIndustry?.length) {
        setSelectedBusinessIndustry(
            values.detail.audienceTargetting.interest.businessAndIndustry.map((el) => {
                const id = TargettingOptionBusiness.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.businessAndIndustry]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.entertainment?.length) {
        setSelectedEntertainment(
            values.detail.audienceTargetting.interest.entertainment.map((el) => {
                const id = TargettingOptionEntertainment.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.entertainment]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.familyAndRelationship?.length) {
        setSelectedFamilyRelationship(
            values.detail.audienceTargetting.interest.familyAndRelationship.map((el) => {
                const id = TargettingOptionFamily.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.familyAndRelationship]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.fitnessAndWellness?.length) {
        setSelectedFitnessWellness(
            values.detail.audienceTargetting.interest.fitnessAndWellness.map((el) => {
                const id = TargettingOptionFitness.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.fitnessAndWellness]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.foodAndDrink?.length) {
        setSelectedFoodDrink(
            values.detail.audienceTargetting.interest.foodAndDrink.map((el) => {
                const id = TargettingOptionFood.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.foodAndDrink]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.hobbiesAndActivities?.length) {
        setSelectedHobbiesActivities(
            values.detail.audienceTargetting.interest.hobbiesAndActivities.map((el) => {
                const id = TargettingOptionHobby.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.hobbiesAndActivities]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.shoppingAndFashion?.length) {
        setSelectedShoppingFashion(
            values.detail.audienceTargetting.interest.shoppingAndFashion.map((el) => {
                const id = TargettingOptionShopping.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.shoppingAndFashion]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.sportsAndOutdoors?.length) {
        setSelectedSportsOutdoors(
            values.detail.audienceTargetting.interest.sportsAndOutdoors.map((el) => {
                const id = TargettingOptionSports.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.sportsAndOutdoors]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.technology?.length) {
        setSelectedTechnology(
            values.detail.audienceTargetting.interest.technology.map((el) => {
                const id = TargettingOptionTechnology.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.technology]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.education?.length) {
        setSelectedEducation(
            values.detail.audienceTargetting.interest.education.map((el) => {
                const id = TargettingOptionEducation.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.education]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.relationshipGender?.length) {
        setSelectedRelationshipGender(
            values.detail.audienceTargetting.interest.relationshipGender.map((el) => {
                const id = TargettingOptionRelationshipGender.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.relationshipGender]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.relationshipType?.length) {
        setSelectedRelationshipType(
            values.detail.audienceTargetting.interest.relationshipType.map((el) => {
                const id = TargettingOptionRelationshipType.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.relationshipType]);
  
  useEffect(() => {
    if (values?.detail?.audienceTargetting?.interest?.work?.length) {
        setSelectedWork(
            values.detail.audienceTargetting.interest.work.map((el) => {
                const id = TargettingOptionWork.filter((e) => e.value === el);
                return { value: el, label: id?.[0]?.label };
            })
        );
    }
  }, [values?.detail?.audienceTargetting?.interest?.work]);

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
            <Checkbox onChange={() => {
                setFbIncomeRange(!fbIncomeRange)
                if(!fbIncomeRange) {
                    setFieldValue(
                      "detail.householdIncomeDetailsfb",
                      ['NA']
                    );
                }
            }}>
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
        <GridItem>
          <MultiSelectInputBox
            label='Affinity'
            name='detail.audienceTargetting.behavior.affinity'
            options={TargettingOptionAffinity}
            value={selectedAffinity}
            placeholder={`Select Affinity...`}
            onChange={(e) => {
                setSelectedAffinity(e.map((v) => v))
                setFieldValue(
                  'detail.audienceTargetting.behavior.affinity',
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="In-Market"
            name="detail.audienceTargetting.behavior.inMarket"
            options={TargettingOptionInMarket}
            value={selectedInMarket}
            placeholder={`Select In-Market...`}
            onChange={(e) => {
                setSelectedInMarket(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.inMarket",
                  e.map((v) => v["value"])
                )

            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Automotive"
            name="detail.audienceTargetting.behavior.automotive"
            options={TargettingOptionAutomative}
            value={selectedAutomotive}
            placeholder={`Select Automotive...`}
            onChange={(e) => {
              setSelectedAutomotive(e.map((v) => v))
              setFieldValue(
                "detail.audienceTargetting.behavior.automotive",
                e.map((v) => v["value"])
              )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Charitable Donations"
            name="detail.audienceTargetting.behavior.charitableDonations"
            options={TargettingOptionCharitable}
            value={selectedCharitableDonations}
            placeholder={`Select Charitable Donations...`}
            onChange={(e) => {
                setSelectedCharitableDonations(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.charitableDonations",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Expats"
            name="detail.audienceTargetting.behavior.expats"
            options={TargettingOptionExpat}
            value={selectedExpats}
            placeholder={`Select Expats...`}
            onChange={(e) => {
                setSelectedExpats(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.expats",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Job Role"
            name="detail.audienceTargetting.behavior.jobRole"
            options={TargettingOptionJobRole}
            value={selectedJobRole}
            placeholder={`Select Job Role...`}
            onChange={(e) => {
                setSelectedJobRole(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.jobRole",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Mobile Device User"
            name="detail.audienceTargetting.behavior.mobileDeviceUser"
            options={TargettingOptionMobile}
            value={selectedMobileDeviceUser}
            placeholder={`Select Mobile Device User...`}
            onChange={(e) => {
                setSelectedMobileDeviceUser(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.mobileDeviceUser",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Travel"
            name="detail.audienceTargetting.behavior.travel"
            options={TargettingOptionTravel}
            value={selectedTravel}
            placeholder={`Select Travel...`}
            onChange={(e) => {
                setSelectedTravel(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.travel",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Business-to-Business"
            name="detail.audienceTargetting.behavior.businessToBusiness"
            options={TargettingOptionB2B}
            value={selectedB2B}
            placeholder={`Select Business-to-Business...`}
            onChange={(e) => {
                setSelectedB2B(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.businessToBusiness",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Digital Activities"
            name="detail.audienceTargetting.behavior.digitalActivities"
            options={TargettingOptionDigital}
            value={selectedDigitalActivities}
            placeholder={`Select Digital Activities...`}
            onChange={(e) => {
                setSelectedDigitalActivities(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.digitalActivities",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Financial"
            name="detail.audienceTargetting.behavior.financial"
            options={TargettingOptionFinancial}
            value={selectedFinancial}
            placeholder={`Select Financial...`}
            onChange={(e) => {
                setSelectedFinancial(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.financial",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Media"
            name="detail.audienceTargetting.behavior.media"
            options={TargettingOptionMedia}
            value={selectedMedia}
            placeholder={`Select Media...`}
            onChange={(e) => {
                setSelectedMedia(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.media",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Purchase Behaviour"
            name="detail.audienceTargetting.behavior.purchaseBehavior"
            options={TargettingOptionPurchase}
            value={selectedPurchaseBehaviour}
            placeholder={`Select Purchase Behaviour...`}
            onChange={(e) => {
                setSelectedPurchaseBehaviour(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.purchaseBehavior",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Residential Profiles"
            name="detail.audienceTargetting.behavior.residentialProfiles"
            options={TargettingOptionResidential}
            value={selectedResidentialProfiles}
            placeholder={`Select Residential Profiles...`}
            onChange={(e) => {
                setSelectedResidentialProfiles(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.residentialProfiles",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Seasonal & Events"
            name="detail.audienceTargetting.behavior.seasonalAndEvents"
            options={TargettingOptionSeasonal}
            value={selectedSeasonalEvents}
            placeholder={`Select Seasonal & Events...`}
            onChange={(e) => {
                setSelectedSeasonalEvents(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.behavior.seasonalAndEvents",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="purple.500">
            Interest/Topic Targeting
          </Heading>
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Business & Industry"
            name="detail.audienceTargetting.interest.businessAndIndustry"
            options={TargettingOptionBusiness}
            value={selectedBusinessIndustry}
            placeholder={`Select Business & Industry...`}
            onChange={(e) => {
                setSelectedBusinessIndustry(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.businessAndIndustry",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Entertainment"
            name="detail.audienceTargetting.interest.entertainment"
            options={TargettingOptionEntertainment}
            value={selectedEntertainment}
            placeholder={`Select Entertainment...`}
            onChange={(e) => {
                setSelectedEntertainment(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.entertainment",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Family & Relationship"
            name="detail.audienceTargetting.interest.familyAndRelationship"
            options={TargettingOptionFamily}
            value={selectedFamilyRelationship}
            placeholder={`Select Family & Relationship...`}
            onChange={(e) => {
                setSelectedFamilyRelationship(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.familyAndRelationship",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Fitness & Wellness"
            name="detail.audienceTargetting.interest.fitnessAndWellness"
            options={TargettingOptionFitness}
            value={selectedFitnessWellness}
            placeholder={`Select Fitness & Wellness...`}
            onChange={(e) => {
                setSelectedFitnessWellness(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.fitnessAndWellness",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Food & Drink"
            name="detail.audienceTargetting.interest.foodAndDrink"
            options={TargettingOptionFood}
            value={selectedFoodDrink}
            placeholder={`Select Food & Drink...`}
            onChange={(e) => {
                setSelectedFoodDrink(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.foodAndDrink",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Hobbies & Activities"
            name="detail.audienceTargetting.interest.hobbiesAndActivities"
            options={TargettingOptionHobby}
            value={selectedHobbiesActivities}
            placeholder={`Select Hobbies & Activities...`}
            onChange={(e) => {
                setSelectedHobbiesActivities(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.hobbiesAndActivities",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Shopping & Fashion"
            name="detail.audienceTargetting.interest.shoppingAndFashion"
            options={TargettingOptionShopping}
            value={selectedShoppingFashion}
            placeholder={`Select Shopping & Fashion...`}
            onChange={(e) => {
                setSelectedShoppingFashion(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.shoppingAndFashion",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Sports & Outdoors"
            name="detail.audienceTargetting.interest.sportsAndOutdoors"
            options={TargettingOptionSports}
            value={selectedSportsOutdoors}
            placeholder={`Select Sports & Outdoors...`}
            onChange={(e) => {
                setSelectedSportsOutdoors(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.sportsAndOutdoors",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Technology"
            name="detail.audienceTargetting.interest.technology"
            options={TargettingOptionTechnology}
            value={selectedTechnology}
            placeholder={`Select Technology...`}
            onChange={(e) => {
                setSelectedTechnology(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.technology",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Education"
            name="detail.audienceTargetting.interest.education"
            options={TargettingOptionEducation}
            value={selectedEducation}
            placeholder={`Select Education...`}
            onChange={(e) => {
                setSelectedEducation(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.education",
                  e.map((v) => v["value"])
                )
            }}
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
        <GridItem>
          <MultiSelectInputBox
            label="Relationship - Gender"
            name="detail.audienceTargetting.interest.relationshipGender"
            options={TargettingOptionRelationshipGender}
            value={selectedRelationshipGender}
            placeholder={`Select Relationship - Gender...`}
            onChange={(e) => {
                setSelectedRelationshipGender(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.relationshipGender",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem>
          <MultiSelectInputBox
            label="Relationship - Type"
            name="detail.audienceTargetting.interest.relationshipType"
            options={TargettingOptionRelationshipType}
            value={selectedRelationshipType}
            placeholder={`Select Relationship - Type...`}
            onChange={(e) => {
                setSelectedRelationshipType(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.relationshipType",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MultiSelectInputBox
            label="Work"
            name="detail.audienceTargetting.interest.work"
            options={TargettingOptionWork}
            value={selectedWork}
            placeholder={`Select Work...`}
            onChange={(e) => {
                setSelectedWork(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.interest.work",
                  e.map((v) => v["value"])
                )
            }}
          />
        </GridItem>
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
          <MultiSelectInputBox
            label="Contextual/Sites Targeting/White List"
            name="detail.audienceTargetting.contextual"
            options={TargettingOptionContext}
            value={selectedContextual}
            placeholder={`Select Contextual...`}
            onChange={(e) => {
                setSelectedContextual(e.map((v) => v))
                setFieldValue(
                  "detail.audienceTargetting.contextual",
                  e.map((v) => v["value"])
                )
            }}
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
