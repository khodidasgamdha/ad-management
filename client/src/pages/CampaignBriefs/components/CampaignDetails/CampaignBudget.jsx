import {
  Box,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Radio,
  Text,
} from "@chakra-ui/react";
import InputBox from "../../../../components/InputBox";
import MultiSelectInputBox from "../../../../components/MultiSelectInputBox";
import { CampaignBudgetOptions } from "../../constant/SelectValues";
import { CloseIcon } from "@chakra-ui/icons";
import "../../style/CampaignDetails.css";
import { RadioGroupControl } from "formik-chakra-ui";
import { useState } from "react";
import { useEffect } from "react";

const CampaignBudget = ({ values, setFieldValue }) => {
  const [budgets, setBudgets] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    if (values.detail.campaignBudget.googleSearchAds) {
      total += parseInt(values.detail.campaignBudget.googleSearchAds) || 0;
    }
    if (values.detail.campaignBudget.bingSearchAds) {
      total += parseInt(values.detail.campaignBudget.bingSearchAds) || 0;
    }
    if (values.detail.campaignBudget.fbAds) {
      total += parseInt(values.detail.campaignBudget.fbAds) || 0;
    }
    if (values.detail.campaignBudget.instaAds) {
      total += parseInt(values.detail.campaignBudget.instaAds) || 0;
    }
    if (values.detail.campaignBudget.displayAds) {
      total += parseInt(values.detail.campaignBudget.displayAds) || 0;
    }
    if (values.detail.campaignBudget.twitterAds) {
      total += parseInt(values.detail.campaignBudget.twitterAds) || 0;
    }
    if (values.detail.campaignBudget.nativeAds) {
      total += parseInt(values.detail.campaignBudget.nativeAds) || 0;
    }
    if (values.detail.campaignBudget.spotifyAudioAds) {
      total += parseInt(values.detail.campaignBudget.spotifyAudioAds) || 0;
    }
    if (values.detail.campaignBudget.pinterestAds) {
      total += parseInt(values.detail.campaignBudget.pinterestAds) || 0;
    }
    if (values.detail.campaignBudget.quoraAds) {
      total += parseInt(values.detail.campaignBudget.quoraAds) || 0;
    }
    if (values.detail.campaignBudget.displayVideo) {
      total += parseInt(values.detail.campaignBudget.displayVideo) || 0;
    }
    if (values.detail.campaignBudget.youtubeVideo) {
      setTotal(
        total + parseInt(values.detail.campaignBudget.youtubeVideo) || 0
      );
    }
    if (values.detail.campaignBudget.fbVideo) {
      total += parseInt(values.detail.campaignBudget.fbVideo) || 0;
    }
    if (values.detail.campaignBudget.instaVideo) {
      total += parseInt(values.detail.campaignBudget.instaVideo) || 0;
    }
    if (values.detail.campaignBudget.overTheTop) {
      total += parseInt(values.detail.campaignBudget.overTheTop) || 0;
    }
    if (values.detail.campaignBudget.retargetting) {
      if (values.detail.campaignBudget.retargetting.googleSearchRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.googleSearchRt) ||
          0;
      }
      if (values.detail.campaignBudget.retargetting.bingSearchRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.bingSearchRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.fbRt) {
        total += parseInt(values.detail.campaignBudget.retargetting.fbRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.instaRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.instaRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.displayRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.displayRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.linkedinRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.linkedinRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.nativeRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.nativeRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.pinterestRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.pinterestRt) || 0;
      }
      if (values.detail.campaignBudget.retargetting.videoRt) {
        total +=
          parseInt(values.detail.campaignBudget.retargetting.videoRt) || 0;
      }
    }
    if (values.detail.campaignBudget.other) {
      if (values.detail.campaignBudget.other.hotelAds) {
        total += parseInt(values.detail.campaignBudget.other.hotelAds) || 0;
      }
      if (values.detail.campaignBudget.other.travelAds) {
        total += parseInt(values.detail.campaignBudget.other.travelAds) || 0;
      }
      if (values.detail.campaignBudget.other.shoppingAds) {
        total += parseInt(values.detail.campaignBudget.other.shoppingAds) || 0;
      }
      if (values.detail.campaignBudget.other.fbEvents) {
        total += parseInt(values.detail.campaignBudget.other.fbEvents) || 0;
      }
      if (values.detail.campaignBudget.other.fbLookalike) {
        total += parseInt(values.detail.campaignBudget.other.fbLookalike) || 0;
      }
      if (values.detail.campaignBudget.other.instaLookalike) {
        total +=
          parseInt(values.detail.campaignBudget.other.instaLookalike) || 0;
      }
      if (values.detail.campaignBudget.other.displayList) {
        total += parseInt(values.detail.campaignBudget.other.displayList) || 0;
      }
      if (values.detail.campaignBudget.other.fbList) {
        total += parseInt(values.detail.campaignBudget.other.fbList) || 0;
      }
      if (values.detail.campaignBudget.other.instaList) {
        total += parseInt(values.detail.campaignBudget.other.instaList) || 0;
      }
      if (values.detail.campaignBudget.other.weatherAds) {
        total += parseInt(values.detail.campaignBudget.other.weatherAds) || 0;
      }
      if (values.detail.campaignBudget.other.linkedinInmail) {
        total +=
          parseInt(values.detail.campaignBudget.other.linkedinInmail) || 0;
      }
      if (values.detail.campaignBudget.other.linkedinSponsored) {
        total +=
          parseInt(values.detail.campaignBudget.other.linkedinSponsored) || 0;
      }
      if (values.detail.campaignBudget.other.fbLead) {
        total += parseInt(values.detail.campaignBudget.other.fbLead) || 0;
      }
      if (values.detail.campaignBudget.other.instaLead) {
        total += parseInt(values.detail.campaignBudget.other.instaLead) || 0;
      }
      if (values.detail.campaignBudget.other.instantExperience) {
        total +=
          parseInt(values.detail.campaignBudget.other.instantExperience) || 0;
      }
    }
    setTotal(total);
  }, [values.detail.campaignBudget]);

  return (
    <Box bg="green.50" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading fontSize="md" color="green.500">
            Campaign Budget
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={1}>
              <MultiSelectInputBox
                label="Campaign Budget"
                name="Campaign Budget"
                options={CampaignBudgetOptions}
                placeholder={`Select...`}
                onChange={(e) => {
                  setBudgets(e);
                }}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {budgets.map((el, index) => (
                  <GridItem key={index} colSpan={1}>
                    <Box className="budget-item">
                      <Box className="heading">
                        <Text fontSize="sm">{el.label}</Text>
                        <CloseIcon
                          onClick={() =>
                            setBudgets(
                              budgets.filter((e) => e.label != el.label)
                            )
                          }
                          cursor="pointer"
                          w={3}
                          h={3}
                        />
                      </Box>
                      <Box className="input-box">
                        <InputBox name={el.name} />
                      </Box>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
        {/* {CAMPAIGN_BUDGET.map((input, index) => {
                    return (
                        <GridItem key={index}>
                            <InputBox
                                name={input.name}
                                type={input.type}
                                label={input.placeholder}
                            />
                        </GridItem>
                    );
                })} */}
        <GridItem>
          <RadioGroupControl
            label="Monthly"
            labelProps={{
              fontSize: "sm",
              color: "gray",
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
        <GridItem>
          <Box>
            <FormLabel color="gray" fontSize="sm">
              Total
            </FormLabel>
            <Button className="total-budget">$ {total} / month</Button>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox name="detail.campaignBudget.custom" label="Custom" />
        </GridItem>
        <GridItem colSpan={2}>
          <InputBox
            name="detail.campaignBudget.budgetAddOn"
            label="Budget Add On"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CampaignBudget;
