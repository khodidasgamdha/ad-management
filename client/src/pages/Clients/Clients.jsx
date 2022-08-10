import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    Divider,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../components/Datatable";
import { useGetClientList } from "../../hooks/clients/useGetClientList";
import Actions from "./components/Actions";
import "../../pages/CampaignBriefs/style/AdUploadList.css";
import { TEXT_COLOR } from "../../layout/constant/MenuList";
import { IoMdAddCircle } from "react-icons/io";
import UserTableNameWithProfile from "../Users/components/UserTableNameWithProfile";

const Clients = () => {
    const { data, refetch } = useGetClientList();
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        setClients(data?.clients);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedClients = clients.filter((el) => {
                if (el?.description?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.detail?.industry?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                }
            });
            setClients(searchedClients);
        } else {
            setClients(data?.clients);
        }
    }, [search]);

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: (data) => <UserTableNameWithProfile data={data} />,
            },
            {
                Header: "Industry",
                accessor: "detail.industry",
            },
            {
                Header: "State",
                accessor: "state",
                Cell: (data) => {
                    return (
                        <>
                            <Icon
                                viewBox="0 0 200 200"
                                mr={2}
                                color={
                                    data.row.original.state === "ACTIVE"
                                        ? "#3F7EE6"
                                        : data.row.original.state === "INACTIVE"
                                        ? "#B5B7C8"
                                        : data.row.original.state === "ON_HOLD"
                                        ? "#59AB9E"
                                        : "#3F7EE6"
                                }
                            >
                                <path
                                    fill="currentColor"
                                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                />
                            </Icon>
                            {data.row.original.state}
                        </>
                    );
                },
            },
            {
                Header: () => <Text>Actions</Text>,
                accessor: "actions",
                Cell: (data) => {
                    return <Actions row={data.row.original} />;
                },
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
                Clients
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
                    onClick={() => navigate("/client/new")}
                >
                    Add Client
                </Button>
            </div>

            <Divider />
            <Datatable data={clients || []} columns={columns} />
        </div>
    );
};

export default Clients;
