import React, { useEffect, useMemo, useState } from "react";
import {
    Button,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";
import Datatable from "../FbCampaigns/Datatable";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";
import { useSelector } from "react-redux";
import { useGetFbCampaigns } from "../../../../hooks/campaign-briefs/useGetFbCampaigns";

const FbAdSetsList = () => {
    const { id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);
    const [fbAdSets, setFbAdSets] = useState([]);
    const [search, setSearch] = useState();
    const { mutate, data } = useGetFbCampaigns();

    useEffect(() => {
        if (clientId && id) {
            mutate({
                clientId,
                campaignId: id,
            });
        }
    }, [clientId, id]);

    useEffect(() => {
        data?.fbCampaigns?.forEach((el) => {
            setFbAdSets(
                el?.fb_ad_sets?.value?.map((val) => {
                    return {
                        ...val,
                        fbId: el.fb_campaign_id,
                    };
                })
            );
        });
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedFbAds = fbAdSets.filter((el) => {
                if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (el?.fbId?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.detail?.adName?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (
                    el?.end_time?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (
                    el?.start_time?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                }
            });
            setFbAdSets(searchedFbAds);
        } else {
            data?.fbCampaigns?.forEach((el) => {
                setFbAdSets(
                    el?.fb_ad_sets?.value?.map((val) => {
                        return {
                            ...val,
                            fbId: el.fb_campaign_id,
                        };
                    })
                );
            });
        }
    }, [search]);

    const columns = useMemo(
        () => [
            {
                Header: "Ad Set Name",
                accessor: "name",
            },
            // {
            //     Header: "FB Ad Set Id",
            //     accessor: "fbId",
            // },
            {
                Header: "Start Date",
                accessor: "start_time",
            },
            {
                Header: "End Date",
                accessor: "end_time",
            },
            {
                Header: () => <Text>Actions</Text>,
                accessor: "actions",
                Cell: (data) => (
                    <HStack>
                        <Button
                            size="sm"
                            variant="outline"
                            aria-label="View/Edit"
                            icon={<FiEye />}
                            colorScheme="yellow"
                            py={5}
                        >
                            View/Edit
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            aria-label="Delete"
                            icon={<FiEye />}
                            colorScheme="red"
                            py={5}
                        >
                            Delete
                        </Button>
                    </HStack>
                ),
            },
        ],
        []
    );

    return (
        <div className="ad-upload-list">
            <Heading color={"gray"} fontSize="lg" my={5} mb={7}>
                Fb Ad Sets
            </Heading>
            <div className="search">
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input
                            name="search"
                            type="tel"
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                </Stack>
                <Button
                    colorScheme="blue"
                    backgroundColor="blue.400"
                    borderRadius={4}
                    px="10"
                    marginTop={5}
                    rightIcon={<MdFileDownload />}
                >
                    Download Data
                </Button>
            </div>
            <Datatable data={fbAdSets || []} columns={columns} />
        </div>
    );
};

export default FbAdSetsList;
