import {
  Button,
  Center,
  css,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { For } from "react-haiku";
import { useRecoilValue } from "recoil";
import { profile } from "../../../atoms/authAtom";
import { CAMPAIGN_BRIEFS_TABS } from "../../../constant";
import { useGetClientDetailsOnClick } from "../../../hooks/clients/useGetClientDetails";
import CreateForm from "./CreateForm";
import { BiPlusCircle, BiArrowBack } from "react-icons/bi";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { useNavigate, useParams } from "react-router-dom";
import CreateFacebookCampaign from "./CreateFacebookCampaignModel";
import AdUploadList from "./AdUploadList";
import { useGetCampaignList } from "../../../hooks/campaign-briefs/useGetCampaignList";
import { useEffect } from "react";

const CreateCampaign = () => {
  const [clientId, SetClientId] = useState(null);
  const [tabIndex, SetTabIndex] = useState(6);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    access_info: { clients },
  } = useRecoilValue(profile);

  useEffect(() => {
    SetClientId(clients[0].id);
  }, [clients]);

  const { mutate, isLoading, data } = useGetClientDetailsOnClick();

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem
        w="full"
        colSpan={{ base: 6, lg: tabIndex === 6 ? 6 : 4 }}
        mb={{ base: 3, lg: 0 }}
      >
        <Heading fontSize="sm" mb={7} color={TEXT_COLOR}>
          <Flex onClick={() => navigate("/campaign-briefs")} cursor={"pointer"}>
            <Center marginRight={2}>
              <BiArrowBack color="#A7A9BD" />
            </Center>
            <Center>
              <Text
                css={css({
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#A7A9BD",
                })}
              >
                Back to Campaign
              </Text>
            </Center>
          </Flex>
        </Heading>
        <Heading fontSize="4xl" mb={4} color={TEXT_COLOR}>
          Create Campaign
        </Heading>
        <Tabs
          defaultIndex={tabIndex}
          size="sm"
          w="full"
          colorScheme="black"
          overflow="hidden"
        >
          <TabList
            overflowX="auto"
            css={css({
              scrollbarWidth: "none",
              "::-webkit-scrollbar": { display: "none" },
              WebkitOverflowScrolling: "touch",
              boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
              border: "0 none",
            })}
          >
            <For
              each={CAMPAIGN_BRIEFS_TABS}
              render={(tab, index) => {
                return (
                  <Tab onClick={() => SetTabIndex(index)} whiteSpace="nowrap">
                    {tab.title}
                  </Tab>
                );
              }}
            />
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading color={TEXT_COLOR} size="md">
                Current Status: New
              </Heading>
              <CreateForm
                clientDetails={
                  data?.client || JSON.parse(localStorage.getItem("client"))
                }
              />
            </TabPanel>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
            <TabPanel>4</TabPanel>
            <TabPanel>5</TabPanel>
            <TabPanel>
              <AdUploadList />
            </TabPanel>
            <TabPanel>7</TabPanel>
            <TabPanel>8</TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
      <GridItem padding={5} colSpan={{ base: 6, lg: tabIndex === 6 ? 0 : 2 }}>
        {id && (
          <VStack align="start">
            <Button
              colorScheme="blue"
              backgroundColor="blue.400"
              borderRadius={4}
              px="10"
              rightIcon={<BiPlusCircle />}
              disabled={!clientId}
            >
              DV360 Campaign
            </Button>
            <Button
              colorScheme="blue"
              backgroundColor="blue.400"
              borderRadius={4}
              px="10"
              marginTop={5}
              rightIcon={<BiPlusCircle />}
              onClick={onOpen}
              disabled={!clientId}
            >
              Facebook Campaign
            </Button>
          </VStack>
        )}

        {tabIndex !== 6 && (
          <VStack align="start" w="full" spacing={4}>
            <Button
              px="14"
              isLoading={isLoading}
              onClick={() => {
                if (clientId) {
                  mutate({
                    id: clientId,
                  });
                }
              }}
              disabled={!clientId}
              rounded="full"
              size="sm"
              marginTop={5}
            >
              {id ? "Update" : "Add"}
            </Button>
          </VStack>
        )}
      </GridItem>
      <CreateFacebookCampaign
        campaignId={id}
        isOpen={isOpen}
        onClose={onClose}
        clientId={clientId}
      />
    </Grid>
  );
};

export default CreateCampaign;
