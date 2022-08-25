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
    useDisclosure,
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";
import Datatable from "./Datatable";
import { useGetFbCampaigns } from "../../../../hooks/campaign-briefs/useGetFbCampaigns";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";
import { useSelector } from "react-redux";
import FbAdSetModel from "../FbAdSets/FbAdSetModel";
import moment from 'moment'

const FbCampaignList = () => {
    const { id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);
    const [fbData, setFbData] = useState();
    const [search, setSearch] = useState();
    const [fbList, setFbList] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        setFbList(data?.fbCampaigns);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedFbList = fbList.filter((el) => {
                if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.fb_campaign_id?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (el?.id?.toLowerCase().includes(search.trim())) {
                    return true;
                }
            });
            setFbList(searchedFbList);
        } else {
            setFbList(data?.fbCampaigns);
        }
    }, [search]);

    const columns = useMemo(
        () => [
            // {
            //     Header: "Id",
            //     accessor: "id",
            // },
            {
                Header: "NAME",
                accessor: "name",
            },
            // {
            //     Header: "FB Campaign ID",
            //     accessor: "fb_campaign_id",
            // },
            {
                Header: "Created At",
                accessor: "created_at",
                Cell: (data) => (
                    `${moment(data?.row?.original?.created_at).format(
                        "h:mm:ss A"
                    )}, ${moment(data?.row?.original?.created_at).format(
                        "MMMM DD YYYY"
                    )}`
                )
            },
            {
                Header: "Updated At",
                accessor: "updated_at",
                Cell: (data) => (
                    `${moment(data?.row?.original?.updated_at).format(
                        "h:mm:ss A"
                    )}, ${moment(data?.row?.original?.updated_at).format(
                        "MMMM DD YYYY"
                    )}`
                )
            },
            {
                Header: () => <Text>Actions</Text>,
                accessor: "actions",
                Cell: (data) => (
                    <HStack>
                        <Button
                            size="sm"
                            variant="outline"
                            aria-label="New Ad Set"
                            icon={<FiEye />}
                            py={5}
                            onClick={() => {
                                setFbData(data?.rows?.[0]?.original);
                                onOpen();
                            }}
                        >
                            New Ad Set
                        </Button>
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
        <>
            <div className="ad-upload-list">
                <Heading color={"gray"} fontSize="lg" my={5} mb={7}>
                    FB Campaigns
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
                <Datatable data={fbList || []} columns={columns} />
            </div>
            <FbAdSetModel
                campaignId={id}
                clientId={clientId}
                isOpen={isOpen}
                onClose={onClose}
                fbData={fbData}
            />
        </>
    );
};

export default FbCampaignList;
