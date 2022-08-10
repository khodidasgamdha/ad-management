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
import { useGetDv360Campaigns } from "../../../../hooks/campaign-briefs/useGetDv360Campaigns";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";
import { useSelector } from "react-redux";

const Dv360CampaignList = () => {
    const { id } = useParams();
    const [search, setSearch] = useState();
    const [dv360Data, setDv360Data] = useState([]);
    const clientId = useSelector((state) => state.client.clientId);

    const { mutate, data } = useGetDv360Campaigns();

    useEffect(() => {
        if (clientId && id) {
            mutate({
                clientId,
                campaignId: id,
            });
        }
    }, [clientId, id]);

    useEffect(() => {
        setDv360Data(data?.dvCampaigns);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedDv360 = dv360Data.filter((el) => {
                if (el?.id?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.dv_campaign_id?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                }
            });
            setDv360Data(searchedDv360);
        } else {
            setDv360Data(data?.dvCampaigns);
        }
    }, [search]);

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
                Header: "DV360 Campaign ID",
                accessor: "dv_campaign_id",
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
                        >
                            New Insertion Order
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
        <div className="ad-upload-list">
            <Heading color={"gray"} fontSize="lg" my={5} mb={7}>
                DV360 Campaigns
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
            <Datatable data={dv360Data || []} columns={columns} />
        </div>
    );
};

export default Dv360CampaignList;
