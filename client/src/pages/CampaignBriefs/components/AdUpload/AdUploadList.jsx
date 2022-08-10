import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
} from "@chakra-ui/react";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";
import Datatable from "../../../../components/Datatable";
import { useAdUploadList } from "../../../../hooks/campaign-briefs/useAdUploadList";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";
import { useSelector } from "react-redux";
import moment from "moment";

const AdUploadList = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);

    const { data, refetch } = useAdUploadList(clientId, id);

    const [search, setSearch] = useState();
    const [adUploadList, setAdUploadList] = useState();

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        setAdUploadList(data?.adUploads);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedAdUploads = adUploadList.filter((el) => {
                if (el?.ad_upload_type?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.description?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (el?.message?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (el?.status?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.created_at?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                }
            });
            setAdUploadList(searchedAdUploads);
        } else {
            setAdUploadList(data?.adUploads);
        }
    }, [search]);

    const columns = useMemo(
        () => [
            {
                Header: "NAME",
                accessor: "name",
            },
            // {
            //     Header: "Description",
            //     accessor: "description",
            // },
            {
                Header: "Channel",
                accessor: "ad_upload_type",
            },
            {
                Header: "Status",
                accessor: "status",
            },
            {
                Header: "Added on",
                accessor: "created_at",
                Cell: (data) => {
                    return (
                        <>
                            {`${moment(data.row.original.created_at).format(
                                "h:mm:ss A"
                            )}, ${moment(data.row.original.created_at).format(
                                "MMMM DD YYYY"
                            )}`}
                            <br />
                            <p style={{ marginTop: "5px" }}>GMT-07:00</p>
                        </>
                    );
                },
            },
            {
                Header: () => <Text>Actions</Text>,
                accessor: "actions",
                Cell: (data) => {
                    let url = `/campaign-brief/${id}/ad-upload/fb/${data.row.original.id}`;
                    if (data?.row.original?.ad_upload_type == "DV360") {
                        url = `/campaign-brief/${id}/ad-upload/dv360/${data.row.original.id}`;
                    }
                    return (
                        <HStack>
                            <Button
                                as={Link}
                                size="sm"
                                variant="outline"
                                aria-label="View details"
                                icon={<FiEye />}
                                to={url}
                                colorScheme="yellow"
                                py={5}
                            >
                                View/Edit
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                aria-label="View details"
                                icon={<FiEye />}
                                colorScheme="red"
                                py={5}
                            >
                                Delete
                            </Button>
                        </HStack>
                    );
                },
            },
        ],
        []
    );

    return (
        <div className="ad-upload-list">
            <Heading color={"gray"} fontSize="lg" my={5} mb={7}>
                Ad Uploads
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
                    rightIcon={<BiPlusCircle />}
                    onClick={() =>
                        navigate(`/campaign-brief/${id}/ad-upload/new/fb`)
                    }
                >
                    Facebook
                </Button>
                <Button
                    colorScheme="blue"
                    backgroundColor="blue.400"
                    borderRadius={4}
                    px="10"
                    marginTop={5}
                    rightIcon={<BiPlusCircle />}
                    onClick={() =>
                        navigate(`/campaign-brief/${id}/ad-upload/new/dv360`)
                    }
                >
                    DV360
                </Button>
            </div>
            <Datatable data={adUploadList || []} columns={columns} />
        </div>
    );
};

export default AdUploadList;
