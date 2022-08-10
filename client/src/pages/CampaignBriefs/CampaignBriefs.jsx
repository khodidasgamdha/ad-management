import {
    Heading,
    Button,
    Divider,
    Text,
    Input,
    InputLeftElement,
    InputGroup,
    Stack,
    Icon,
    HStack,
} from "@chakra-ui/react";
import Datatable from "../../components/Datatable";
import { useEffect, useMemo, useState } from "react";
import { useGetCampaignList } from "../../hooks/campaign-briefs/useGetCampaignList";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { SearchIcon } from "@chakra-ui/icons";
import { TEXT_COLOR } from "../../layout/constant/MenuList";
import { useCreateClone } from "../../hooks/campaign-briefs/useCreateClone";
import { FiCopy, FiEye } from "react-icons/fi";

const CampaignBriefs = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState();
    const [campaignData, setCampaignData] = useState([]);
    const clientId = useSelector((state) => state.client.clientId);

    const { data, refetch } = useGetCampaignList(clientId);
    const { mutate, isLoading } = useCreateClone();

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        setCampaignData(data?.campaigns);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedCampaign = campaignData.filter((el) => {
                if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.end_date?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (
                    el?.start_date?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                }
            });
            setCampaignData(searchedCampaign);
        } else {
            setCampaignData(data?.campaigns);
        }
    }, [search]);

    const columns = useMemo(
        () => [
            {
                Header: "CAMPAIGN NAME",
                accessor: "name",
            },
            {
                Header: "STATUS",
                accessor: "status",
                Cell: (data) => {
                    return (
                        <>
                            <Icon
                                viewBox="0 0 200 200"
                                mr={2}
                                color={
                                    data.row.original.status === "Approved"
                                        ? "#3F7EE6"
                                        : data.row.original.status ===
                                          "Rejected"
                                        ? "#B5B7C8"
                                        : data.row.original.status === "Created"
                                        ? "#59AB9E"
                                        : "blue"
                                }
                            >
                                <path
                                    fill="currentColor"
                                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                />
                            </Icon>
                            {data.row.original.status}
                        </>
                    );
                },
            },
            {
                Header: "START DATE",
                accessor: "start_date",
            },
            {
                Header: "END DATE",
                accessor: "end_date",
            },
            {
                Header: () => <Text>Actions</Text>,
                accessor: "actions",
                Cell: (data) => (
                    <HStack>
                        <Button
                            as={Link}
                            size="sm"
                            variant="outline"
                            aria-label="View details"
                            icon={<FiEye />}
                            to={`/campaign-briefs/${data.row.original.id}`}
                            py={5}
                        >
                            View/Edit
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            isLoading={isLoading}
                            onClick={() => {
                                mutate({
                                    clientId: data.row.original.client_id,
                                    campaignBriefId: data.row.original.id,
                                });
                            }}
                            colorScheme="yellow"
                            leftIcon={<FiCopy />}
                            py={5}
                        >
                            Clone
                        </Button>
                    </HStack>
                ),
            },
        ],
        []
    );

    return (
        <div className="ad-upload-list">
            <Heading
                color={TEXT_COLOR}
                fontWeight="500"
                size="lg"
                my={5}
                mb={7}
            >
                Campaign Briefs
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
                    rightIcon={<IoMdAddCircle />}
                    onClick={() => navigate("/campaign-briefs/new")}
                >
                    New Brief
                </Button>
            </div>

            <Divider />
            <Datatable data={campaignData || []} columns={columns} />
        </div>
    );
};

export default CampaignBriefs;
