import React, { useState, useEffect } from "react";
import {
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
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { TEXT_COLOR } from "../../../../layout/constant/MenuList";
import "../../style/FacebookAdUpload.css";
import { FacebookAdDetails } from "./FacebookAdDetails";
import FacebookAdPreview from "./FacebookAdPreview";
import { useGetFbAdUpload } from "../../../../hooks/campaign-briefs/useGetFbAdUpload";
import { useRecoilValue } from "recoil";
import { profile } from "../../../../atoms/authAtom";
import { useCreateAdPreview } from "../../../../hooks/campaign-briefs/useCreateAdPreview";
import { Comments } from "./Comments";

const FacebookAdUpload = () => {
    const [images, setImages] = useState();
    const [method, setMethod] = useState();
    const [url, setUrl] = useState();
    const [isPreview, setIsPreview] = useState(false);
    const [previewData, setPreviewData] = useState();

    const navigate = useNavigate();
    const { id, fbId } = useParams();

    const {
        access_info: { clients },
    } = useRecoilValue(profile);

    const { data } = useGetFbAdUpload(clients[0]?.id, id, fbId);
    const { mutateAsync } = useCreateAdPreview();

    useEffect(() => {
        if (fbId) {
            setMethod("PUT");
            setUrl(
                `/client/${clients[0]?.id}/campaign-brief/${id}/ad-upload/${fbId}`
            );
        } else {
            setMethod("POST");
            setUrl(`/client/${clients[0]?.id}/campaign-brief/${id}/ad-upload`);
        }
    }, [fbId]);

    const getImageData = async (data) => {
        setImages(data);
        await mutateAsync(
            {
                clientId: clients?.[0]?.id,
                campaignBriefId: id,
                type: data?.type,
                description: data?.description,
                imageHash: data?.images?.[0]?.imageHash,
                link: data?.url,
                message: data?.message,
                name: data?.name,
            },
            {
                onSuccess: (data, variables, context) => {
                    setPreviewData(data);
                    if (
                        data?.previews &&
                        Object.keys(data.previews).length > 0
                    ) {
                        setIsPreview(true);
                    }
                },
            }
        );
    };

    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={4} className="fb-upload">
            <GridItem
                w="full"
                colSpan={{ base: 6, lg: 6 }}
                mb={{ base: 3, lg: 0 }}
            >
                <Heading fontSize="sm" mb={7} color={TEXT_COLOR}>
                    <Flex
                        onClick={() => navigate(`/campaign-briefs/${id}`)}
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
                                Back to Campaign Brief
                            </Text>
                        </Center>
                    </Flex>
                </Heading>
                <Heading fontSize="4xl" mb={4} color={TEXT_COLOR}>
                    Facebook Ad Upload
                </Heading>
                <Tabs
                    defaultIndex={0}
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
                        <Tab
                            whiteSpace="nowrap"
                            onClick={() => setIsPreview(false)}
                        >
                            Details
                        </Tab>
                        <Tab
                            whiteSpace="nowrap"
                            isDisabled={images?.images?.length < 1}
                        >
                            Preview
                        </Tab>
                        <Tab whiteSpace="nowrap">Comments</Tab>
                        <Tab whiteSpace="nowrap">Audit Logs</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {isPreview ? (
                                <FacebookAdPreview data={previewData} />
                            ) : (
                                <FacebookAdDetails
                                    getImages={getImageData}
                                    data={data?.adUpload || images}
                                    url={url}
                                    method={method}
                                />
                            )}
                        </TabPanel>
                        <TabPanel>
                            <FacebookAdPreview data={previewData} />
                        </TabPanel>
                        <TabPanel>
                            <Comments
                                clientId={clients[0]?.id}
                                campaignId={id}
                                facebookAdId={fbId}
                            />
                        </TabPanel>
                        <TabPanel>4</TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
        </Grid>
    );
};

export default FacebookAdUpload;
