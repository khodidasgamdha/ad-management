import {
    Heading,
    VStack,
    HStack,
    Tooltip,
    IconButton,
    Button,
    Divider,
    Spinner,
    Badge,
    Text,
} from "@chakra-ui/react";
import { FiRefreshCw } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { profile } from "../../atoms/authAtom";
import Datatable from "../../components/Datatable";
import { useMemo } from "react";
import { useGetCampaignList } from "../../hooks/campaign-briefs/useGetCampaignList";
import { useNavigate } from "react-router-dom";
import TableActionCell from "./components/TableActionCell";

const CampaignBriefs = () => {
    const navigate = useNavigate();

    const {
        access_info: { clients },
    } = useRecoilValue(profile);

    const { data, isLoading, isFetching, refetch } = useGetCampaignList(
        clients[0]?.id
    );

    const columns = useMemo(
        () => [
            {
                Header: "CAMPAIGN NAME",
                accessor: "name",
            },
            {
                Header: "STATUS",
                accessor: "state",
                Cell: (data) => {
                    return (
                        <Badge
                            variant="subtle"
                            colorScheme={
                                data.row.original.state === "ACTIVE"
                                    ? "green"
                                    : data.row.original.state === "INACTIVE"
                                    ? "red"
                                    : data.row.original.state === "ON_HOLD"
                                    ? "yellow"
                                    : "blue"
                            }
                        >
                            {data.row.original.state}
                        </Badge>
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
                Cell: (data) => <TableActionCell data={data} />,
            },
        ],
        []
    );

    return (
        <VStack alignItems="stretch" spacing={6}>
            <HStack alignItems="center" justifyContent="space-between">
                <Heading color="gray.600" fontWeight="500" size="lg">
                    Campaign Briefs
                </Heading>
                <HStack>
                    <Tooltip
                        hasArrow
                        placement="left"
                        label="Refresh"
                        aria-label="Refresh"
                    >
                        <IconButton
                            size="sm"
                            variant="ghost"
                            disabled={isFetching || isLoading}
                            onClick={refetch}
                            icon={
                                isFetching ? (
                                    <Spinner size="sm" />
                                ) : (
                                    <FiRefreshCw />
                                )
                            }
                        />
                    </Tooltip>
                    <Button
                        size="md"
                        loadingText="Fetching..."
                        isLoading={isFetching || isLoading}
                        disabled={isFetching || isLoading}
                        rightIcon={<BiPlusCircle />}
                        onClick={() => navigate("/campaign-briefs/new")}
                    >
                        New Brief
                    </Button>
                </HStack>
            </HStack>
            <Divider />
            <Datatable data={data?.campaigns || []} columns={columns} />
        </VStack>
    );
};

export default CampaignBriefs;
