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
import { TEXT_COLOR } from "../../../../../layout/constant/MenuList";
import "../../../style/FacebookAdUpload.css";
import { DV360AdDetails } from "./DV360AdDetails";
import AdPreview from "../AdPreview";
import { useGetAdUpload } from "../../../../../hooks/campaign-briefs/useGetAdUpload";
import { Comments } from "./Comments";
import { useSelector } from "react-redux";
import AuditLogsList from "../AuditLogsList";

const DV360AdUpload = () => {
    const [images, setImages] = useState();
    const [method, setMethod] = useState();
    const [url, setUrl] = useState();
    const [isPreview, setIsPreview] = useState(false);
    const [previewData, setPreviewData] = useState();

    const navigate = useNavigate();
    const { id, dv360Id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);

    const { data, refetch } = useGetAdUpload(clientId, id, dv360Id);

    useEffect(() => {
        refetch()
    }, [])

    useEffect(() => {
        if (dv360Id) {
            setMethod("PUT");
            setUrl(
                `/client/${clientId}/campaign-brief/${id}/ad-upload/${dv360Id}`
            );
        } else {
            setMethod("POST");
            setUrl(`/client/${clientId}/campaign-brief/${id}/ad-upload`);
        }
    }, [dv360Id]);

    const getImageData = async (data) => {
        setImages(data);
        setPreviewData(data)
        setIsPreview(true);
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
                    DV360 Ad Upload
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
                        <Tab whiteSpace="nowrap" isDisabled={!dv360Id}>
                            Comments
                        </Tab>
                        <Tab whiteSpace="nowrap">Audit Logs</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {isPreview ? (
                                <AdPreview data={previewData} />
                            ) : (
                                <DV360AdDetails
                                    getImages={getImageData}
                                    data={data?.adUpload || images}
                                    url={url}
                                    method={method}
                                    clientId={clientId}
                                    campaignId={id}
                                    adUploadId={dv360Id}
                                />
                            )}
                        </TabPanel>
                        <TabPanel>
                            <AdPreview data={previewData} />
                        </TabPanel>
                        <TabPanel>
                            <Comments
                                clientId={clientId}
                                campaignId={id}
                                dv360AdId={dv360Id}
                            />
                        </TabPanel>
                        <TabPanel>
                            <AuditLogsList />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
        </Grid>
    );
};

export default DV360AdUpload;
