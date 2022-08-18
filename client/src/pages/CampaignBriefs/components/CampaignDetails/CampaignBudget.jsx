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
  const [campaignValue, setCampaignValue] = useState([]);

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
      if (parseInt(values.detail.campaignBudget.displayAds) > 0) {
        // setCampaignValue([
        //   ...campaignValue,
        //   {
        //     label: "Display Ads",
        //     name: `detail.campaignBudget.displayAds`,
        //     value: "Display Ads",
        //   },
        // ]);
      }
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

  useEffect(() => {
    if(values?.detail?.campaignBudget?.googleSearchAds?.length) {
      setCampaignValue([...campaignValue, {
        label: "Google Search Ads",
        name: "detail.campaignBudget.googleSearchAds",
        value: "Google Search Ads"
      }])
    }
    if(values?.detail?.campaignBudget?.bingSearchAds?.length) {
      setCampaignValue([...campaignValue, {
        name: "detail.campaignBudget.bingSearchAds",
        label: "Bing Search Ads",
        value: "Bing Search Ads",
      }])
    }
    // if(values?.detail?.campaignBudget?.fbAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.fbAds",
    //     label: "Facebook Ads",
    //     value: "Facebook Ads"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.instaAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.instaAds",
    //     label: "Instagram Ads",
    //     value: "Instagram Ads",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.displayAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.displayAds",
    //     label: "Display Ads",
    //     value: "Display Ads"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.twitterAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.twitterAds",
    //     label: "Twitter Ads",
    //     value: "Twitter Ads",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.nativeAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.nativeAds",
    //     label: "Native Ads",
    //     value: "Native Ads"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.spotifyAudioAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.spotifyAudioAds",
    //     label: "Spotify Audio Ads",
    //     value: "Spotify Audio Ads",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.pinterestAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.pinterestAds",
    //     label: "Pinterest Ads",
    //     value: "Pinterest Ads"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.quoraAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.quoraAds",
    //     label: "Quora Ads",
    //     value: "Quora Ads",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.displayVideo?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.displayVideo",
    //     label: "Video (Display)",
    //     value: "Video (Display)"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.youtubeVideo?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.youtubeVideo",
    //     label: "Video (YouTube)",
    //     value: "Video (YouTube)",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.fbVideo?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.fbVideo",
    //     label: "Video (Facebook)",
    //     value: "Video (Facebook)"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.instaVideo?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.instaVideo",
    //     label: "Video (Instagram)",
    //     value: "Video (Instagram)",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.overTheTop?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.overTheTop",
    //     label: "Over The Top",
    //     value: "Over The Top"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.googleSearchRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.googleSearchRt",
    //     label: "Google Search RT",
    //     value: "Google Search RT",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.bingSearchRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.bingSearchRt",
    //     label: "Bing Search RT",
    //     value: "Bing Search RT"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.fbRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.fbRt",
    //     label: "Facebook RT",
    //     value: "Facebook RT",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.instaRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.instaRt",
    //     label: "Instagram RT",
    //     value: "Instagram RT"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.displayRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.displayRt",
    //     label: "Display RT",
    //     value: "Display RT",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.linkedinRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.linkedinRt",
    //     label: "Linkedin RT",
    //     value: "Linkedin RT"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.nativeRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.nativeRt",
    //     label: "Native RT",
    //     value: "Native RT",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.pinterestRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.pinterestRt",
    //     label: "Pinterest RT",
    //     value: "Pinterest RT"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.retargetting?.videoRt?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.retargetting.videoRt",
    //     label: "Video RT",
    //     value: "Video RT",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.hotelAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.hotelAds",
    //     label: "Hotel Ads",
    //     value: "Hotel Ads"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.travelAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.travelAds",
    //     label: "Travel Ads",
    //     value: "Travel Ads",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.shoppingAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.shoppingAds",
    //     label: "Shopping Ads",
    //     value: "Shopping Ads"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.fbEvents?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.fbEvents",
    //     label: "Facebook Events",
    //     value: "Facebook Events",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.fbLookalike?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.fbLookalike",
    //     label: "Facebook Lookalike",
    //     value: "Facebook Lookalike"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.instaLookalike?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.instaLookalike",
    //     label: "Instagram Lookalike",
    //     value: "Instagram Lookalike",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.displayList?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.displayList",
    //     label: "Display List",
    //     value: "Display List"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.fbList?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.fbList",
    //     label: "Facebook List",
    //     value: "Facebook List",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.instaList?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.instaList",
    //     label: "Instagram List",
    //     value: "Instagram List"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.weatherAds?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.weatherAds",
    //     label: "Weather Ads",
    //     value: "Weather Ads",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.linkedinInmail?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.linkedinInmail",
    //     label: "Linkedin InMail",
    //     value: "Linkedin InMail"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.linkedinSponsored?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.linkedinSponsored",
    //     label: "Linkedin Sponsored",
    //     value: "Linkedin Sponsored",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.fbLead?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.fbLead",
    //     label: "Facebook Lead",
    //     value: "Facebook Lead"
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.instaLead?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.instaLead",
    //     label: "Instagram Lead",
    //     value: "Instagram Lead",
    //   }])
    // }
    // if(values?.detail?.campaignBudget?.other?.instantExperience?.length) {
    //   setCampaignValue([...campaignValue, {
    //     name: "detail.campaignBudget.other.instantExperience",
    //     label: "Instant Experience",
    //     value: "Instant Experience"
    //   }])
    // }
  }, [values?.detail?.campaignBudget])

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
                value={campaignValue}
                placeholder={`Select...`}
                onChange={(e) => {
                  setBudgets(e);
                  setCampaignValue(e);
                }}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {campaignValue.map((el, index) => (
                  <GridItem key={index} colSpan={1}>
                    <Box className="budget-item">
                      <Box className="heading">
                        <Text fontSize="sm">{el.label}</Text>
                        <CloseIcon
                          onClick={() => {
                            setBudgets(
                              budgets.filter((e) => e.label != el.label)
                            );
                            setCampaignValue(
                              campaignValue.filter((e) => e.label != el.label)
                            );
                            setFieldValue(el.name, "");
                          }}
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
