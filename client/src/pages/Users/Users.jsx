import { SearchIcon } from "@chakra-ui/icons";
import {
    Badge,
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
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Datatable from "../../components/Datatable";
import { useGetUserList } from "../../hooks/users/useGetUserList";
import { TEXT_COLOR } from "../../layout/constant/MenuList";
import Actions from "./components/Actions";
import RolesView from "./components/RolesView";
import UserTableNameWithProfile from "./components/UserTableNameWithProfile";
import "../../pages/CampaignBriefs/style/AdUploadList.css";

const Users = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: (data) => <UserTableNameWithProfile data={data} />,
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Roles",
                accessor: "roles",
                Cell: (data) => {
                    return (
                        <RolesView
                            roles={data.row.original.access_info.roles}
                        />
                    );
                },
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
                                        ? "red"
                                        : data.row.original.state === "ON_HOLD"
                                        ? "yellow.500"
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

    const [search, setSearch] = useState();
    const [users, setUsers] = useState();

    const { data, refetch } = useGetUserList();
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        setUsers(data?.users);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedUsers = users.filter((el) => {
                if (el?.email?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (el?.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (el?.access_info?.roles?.includes(search.trim())) {
                    return true;
                }
            });
            setUsers(searchedUsers);
        } else {
            setUsers(data?.users);
        }
    }, [search]);

    return (
        <div className="ad-upload-list">
            <Heading
                color={TEXT_COLOR}
                fontWeight="500"
                size="lg"
                my={5}
                mb={7}
            >
                Users
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
                    onClick={() => navigate("/user")}
                >
                    Add User
                </Button>
            </div>

            <Divider />
            <Datatable data={users || []} columns={columns} />
            {/* <CreateUserModal isOpen={isOpen} onClose={onClose} /> */}
        </div>
    );
};

export default Users;
