import React, { useEffect, useMemo } from "react";
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

const FbCampaignList = () => {
    const { id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);

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

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id",
            },
            {
                Header: "NAME",
                accessor: "name",
            },
            {
                Header: "FB Campaign ID",
                accessor: "fb_campaign_id",
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
                            onClick={onOpen}
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
                            <Input type="tel" placeholder="Search" />
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
                <Datatable data={data?.fbCampaigns || []} columns={columns} />
            </div>
            <FbAdSetModel
                campaignId={id}
                clientId={clientId}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
};

export default FbCampaignList;
