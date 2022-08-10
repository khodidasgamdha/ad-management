import {
    Box,
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
import React, { useState, useEffect } from "react";
import { For } from "react-haiku";
import { CAMPAIGN_BRIEFS_TABS } from "../../../constant";
import { useGetClientDetailsOnClick } from "../../../hooks/clients/useGetClientDetails";
import CreateForm from "./CampaignDetails/CreateForm";
import { BiPlusCircle, BiArrowBack } from "react-icons/bi";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { useNavigate, useParams } from "react-router-dom";
import CreateFacebookCampaign from "./FbCampaigns/CreateFacebookCampaignModel";
import CreateDV360Campaign from "./Dv360Campaings/CreateDV360CampaignModel";
import AdUploadList from "./AdUpload/AdUploadList";
import { Comment } from "./Comment";
import { useSelector } from "react-redux";
import FbCampaignList from "./FbCampaigns/FbCampaignList";
import DV360CampaignList from "./Dv360Campaings/Dv360CampaignList";
import FbAdSetsList from "./FbAdSets/FbAdSetsList";
import AuditLogsList from "./AuditLogsList";
import { useGetCampaign } from "../../../hooks/campaign-briefs/useGetCampaign";
import { useUpdateCampaign } from "../../../hooks/campaign-briefs/useUpdateCampaign";

const CreateCampaign = () => {
    const [tabIndex, SetTabIndex] = useState(0);
    const {
        isOpen: isFacebookModelOpen,
        onOpen: onFacebookModelOpen,
        onClose: onFacebookModelClose,
    } = useDisclosure();
    const {
        isOpen: isDV360odelOpen,
        onOpen: onDV360ModelOpen,
        onClose: onDV360ModelClose,
    } = useDisclosure();

    const clientId = useSelector((state) => state.client.clientId);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (clientId) {
            mutate({ id: clientId });
            mutateGetCampaign({
                clientId,
                campaignId: id,
            });
        }
    }, [clientId]);

    const { mutate, data } = useGetClientDetailsOnClick();
    const { mutate: updateCampaignStatus } = useUpdateCampaign();
    const { data: campaignData, mutate: mutateGetCampaign } = useGetCampaign();

    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
            <GridItem
                w="full"
                colSpan={{ base: 6, lg: tabIndex === 0 ? 4 : 6 }}
                mb={{ base: 3, lg: 0 }}
            >
                <Heading fontSize="sm" mb={7} color={TEXT_COLOR}>
                    <Flex
                        onClick={() => navigate("/campaign-briefs")}
                        cursor={"pointer"}
                    >
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
                                    <Tab
                                        key={index}
                                        onClick={() => SetTabIndex(index)}
                                        whiteSpace="nowrap"
                                        isDisabled={
                                            !id &&
                                            (tab.title === "AD uploads" ||
                                                tab.title === "Comments")
                                        }
                                    >
                                        {tab.title}
                                    </Tab>
                                );
                            }}
                        />
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex justifyContent="space-between">
                                <Heading color={TEXT_COLOR} size="md">
                                    Current Status:{" "}
                                    <span>{campaignData?.campaign?.status || "Draft"}</span>
                                </Heading>
                                {id &&
                                    campaignData?.campaign?.status ==
                                        "Created" && (
                                        <Box display="flex">
                                            <Button
                                                size="sm"
                                                mr={2}
                                                colorScheme="green"
                                                backgroundColor="green.400"
                                                borderRadius={4}
                                                disabled={!clientId}
                                                onClick={() =>
                                                    updateCampaignStatus({
                                                        clientId,
                                                        campaignBriefId: id,
                                                        status: "Approved",
                                                    })
                                                }
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                size="sm"
                                                colorScheme="red"
                                                backgroundColor="red.400"
                                                borderRadius={4}
                                                disabled={!clientId}
                                                onClick={() =>
                                                    updateCampaignStatus({
                                                        clientId,
                                                        campaignBriefId: id,
                                                        status: "Rejected",
                                                    })
                                                }
                                            >
                                                Reject
                                            </Button>
                                        </Box>
                                    )}
                            </Flex>
                            <CreateForm
                                id={id}
                                clientDetails={
                                    data?.client ||
                                    JSON.parse(localStorage.getItem("client"))
                                }
                                campaignDetails = {campaignData?.campaign}
                            />
                        </TabPanel>
                        <TabPanel>
                            <FbCampaignList />
                        </TabPanel>
                        <TabPanel>
                            <FbAdSetsList />
                        </TabPanel>
                        <TabPanel>
                            <DV360CampaignList />
                        </TabPanel>
                        <TabPanel>4</TabPanel>
                        {/* <TabPanel>
                            <CommentsList data={comments?.comments} />
                        </TabPanel> */}
                        <TabPanel>
                            <AdUploadList />
                        </TabPanel>
                        <TabPanel>
                            <AuditLogsList />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
            <GridItem
                position="fixed"
                right="0"
                width="450px"
                padding={5}
                colSpan={{ base: 6, lg: tabIndex === 0 ? 2 : 0 }}
            >
                {id &&
                    tabIndex === 0 &&
                    campaignData?.campaign?.status != "Created" && (
                        <VStack align="start">
                            <Button
                                colorScheme="blue"
                                backgroundColor="blue.400"
                                borderRadius={4}
                                px="10"
                                rightIcon={<BiPlusCircle />}
                                onClick={onDV360ModelOpen}
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
                                onClick={onFacebookModelOpen}
                                disabled={!clientId}
                            >
                                Facebook Campaign
                            </Button>
                        </VStack>
                    )}

                {id && tabIndex === 0 && (
                    <Comment clientId={clientId} campaignId={id} />
                )}
            </GridItem>

            <CreateDV360Campaign
                isOpen={isDV360odelOpen}
                onClose={onDV360ModelClose}
                clientId={clientId}
                data={campaignData?.campaign}
            />

            <CreateFacebookCampaign
                isOpen={isFacebookModelOpen}
                onClose={onFacebookModelClose}
                clientId={clientId}
                data={campaignData?.campaign}
            />
        </Grid>
    );
};

export default CreateCampaign;
