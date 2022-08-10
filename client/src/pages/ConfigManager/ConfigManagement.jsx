import {
    Button,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import { useEffect, useMemo, useState } from "react";
import Datatable from "./components/Datatable";
import { useGetConfigList } from "../../hooks/config-management/useGetConfigList";
import Actions from "./components/Actions";
import CreateConfigModal from "./components/CreateConfigModal";
import { SearchIcon } from "@chakra-ui/icons";
import { TEXT_COLOR } from "../../layout/constant/MenuList";

const ConfigManagement = () => {
    const { data, refetch } = useGetConfigList();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState();
    const [configData, setConfigData] = useState([]);

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        setConfigData(data?.configs);
    }, [data]);

    // useEffect(() => {
    //     if(search?.trim()) {
    //         const searchedConfigs = configData.filter((el) => {
    //             if(el?.description?.toLowerCase().includes(search.trim())) {
    //                 return true
    //             }
    //             else if(el?.name?.toLowerCase().includes(search.trim())) {
    //                 return true
    //             }
    //             else if(el?.detail?.industry?.toLowerCase().includes(search.trim())) {
    //                 return true
    //             }
    //         })
    //         setConfigData(searchedConfigs)
    //     } else {
    //         setConfigData(data?.configs)
    //     }
    // }, [search]);

    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Key",
                accessor: "key",
            },
            {
                Header: "Value",
                accessor: "value",
                Cell: (data) => {
                    return (
                        <Text>
                            {JSON.stringify(data.row.original.value, null, 2)}
                        </Text>
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

    return (
        <div className="ad-upload-list">
            <Heading
                color={TEXT_COLOR}
                fontWeight="500"
                size="lg"
                my={5}
                mb={7}
            >
                Config management
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
                    onClick={onOpen}
                >
                    Create config
                </Button>
            </div>

            <Datatable data={configData || []} columns={columns} />
            <CreateConfigModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default ConfigManagement;
