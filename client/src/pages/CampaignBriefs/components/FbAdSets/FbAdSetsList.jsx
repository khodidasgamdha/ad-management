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
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";
import Datatable from "../FbCampaigns/Datatable";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";
import { useSelector } from "react-redux";

const FbAdSetsList = () => {
    const { id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);

    // const { mutate, data } = useGetDv360Campaigns();

    // useEffect(() => {
    //     if(clientId && id) {
    //         mutate({
    //             clientId, 
    //             campaignId: id
    //         })
    //     }
    // }, [clientId, id]);

    const columns = useMemo(
        () => [
            {
                Header: "Ad Set Name",
                accessor: "name",
            },
            {
                Header: "FB Ad Set Id",
                accessor: "id",
            },
            {
                Header: "Start Date",
                // accessor: "fb_campaign_id",
            },
            {
                Header: "End Date",
                // accessor: "fb_campaign_id",
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
            <Datatable data={[]} columns={columns} />
        </div>
    );
};

export default FbAdSetsList;
