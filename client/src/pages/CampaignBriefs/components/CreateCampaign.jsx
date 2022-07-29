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
import React, { useState, useEffect } from "react";
import { For } from "react-haiku";
import { useRecoilValue } from "recoil";
import { profile } from "../../../atoms/authAtom";
import { CAMPAIGN_BRIEFS_TABS } from "../../../constant";
import { useGetClientDetailsOnClick } from "../../../hooks/clients/useGetClientDetails";
import { useGetComments } from "../../../hooks/campaign-briefs/useGetComments";
import CreateForm from "./CampaignDetails/CreateForm";
import { BiPlusCircle, BiArrowBack } from "react-icons/bi";
import { TEXT_COLOR } from "../../../layout/constant/MenuList";
import { useNavigate, useParams } from "react-router-dom";
import CreateFacebookCampaign from "./CreateFacebookCampaignModel";
import AdUploadList from "./AdUpload/AdUploadList";
import { Comment } from "./Comments/Comment";
import { CommentsList } from "./Comments/CommentsList";

const CreateCampaign = () => {
    const [clientId, SetClientId] = useState(null);
    const [tabIndex, SetTabIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();
    const { id } = useParams();

    const {
        access_info: { clients },
    } = useRecoilValue(profile);

    useEffect(() => {
        SetClientId(clients[0].id);
    }, [clients]);

    useEffect(() => {
        if(clientId) {
            mutate({ id: clientId });
            mutateComments({
                clientId: clientId,
                campaignId: id,
            });
        }
    }, [clientId]);

    const setIndex = (index, title) => {
        SetTabIndex(index)
        if(title === 'Comments') {
            mutateComments({
                clientId: clientId,
                campaignId: id,
            });
        }
    }

    const { mutate, data } = useGetClientDetailsOnClick();
    const { mutate: mutateComments, data: comments } = useGetComments();

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
                                        onClick={() => setIndex(index, tab.title)}
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
                            <Heading color={TEXT_COLOR} size="md">
                                Current Status: New
                            </Heading>
                            <CreateForm
                                id={id}
                                clientDetails={
                                    data?.client ||
                                    JSON.parse(localStorage.getItem("client"))
                                }
                            />
                        </TabPanel>
                        <TabPanel>1</TabPanel>
                        <TabPanel>2</TabPanel>
                        <TabPanel>3</TabPanel>
                        <TabPanel>4</TabPanel>
                        <TabPanel>
                            <CommentsList data={comments?.comments} />
                        </TabPanel>
                        <TabPanel>
                            <AdUploadList />
                        </TabPanel>
                        <TabPanel>7</TabPanel>
                        <TabPanel>8</TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
            <GridItem
                position="fixed"
                right="0"
                width="420px"
                padding={5}
                colSpan={{ base: 6, lg: tabIndex === 0 ? 2 : 0 }}
            >
                {id && tabIndex === 0 && (
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
                {id && tabIndex === 0 && (
                    <Comment clientid={clientId} campaignId={id} />
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
