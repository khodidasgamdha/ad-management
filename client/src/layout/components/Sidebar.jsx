import {
    Box,
    CloseButton,
    Flex,
    Text,
    useColorModeValue,
    VStack,
    Image,
    Select,
} from "@chakra-ui/react";
import {
    MenuList,
    UserMenuList,
    DeveloperMenuList,
} from "../constant/MenuList";
import NavItem from "./NavItem";
import { For } from "react-haiku";
import { profile } from "../../atoms/authAtom";
import { useGetClientDetailsOnClick } from "../../hooks/clients/useGetClientDetails";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useDispatch, useSelector } from "react-redux";
import { getClients, updateCurrentClient } from "../../store/client/clientThunk";

const Sidebar = ({ onClose, ...rest }) => {
    var BORDER_COLOR = useColorModeValue("gray.100", "gray.800");
    var BG_COLOR = useColorModeValue("gray.100", "gray.900");

    const [isAdmin, setIsAdmin] = useState(false);
    const [isDeveloper, setIsDeveloper] = useState(false);
    const dispatch = useDispatch();

    const {
        access_info: { roles, clients: userClients },
    } = useRecoilValue(profile);

    useEffect(() => {
        if(userClients?.length) {
            dispatch(getClients(userClients));
        }
    }, [userClients])

    const clients = useSelector((state) => state.client.clients);

    useEffect(() => {
        setIsAdmin(roles.includes("Admin"));
        setIsDeveloper(roles.includes("Developer"));
    }, [roles]);

    const { mutate } = useGetClientDetailsOnClick();

    return (
        <Box
            h="full"
            as="aside"
            pos="fixed"
            borderRight="1px"
            transition="3s ease"
            width={{ base: "full", md: 60 }}
            bg={BG_COLOR}
            borderColor={BORDER_COLOR}
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                px="6"
                justifyContent={{ base: "space-between", md: "center" }}
                borderBottomWidth="1px"
                borderBottomColor={BORDER_COLOR}
            >
                <Text fontSize="large" fontWeight="semibold">
                    <Image
                        src={`${process.env.PUBLIC_URL}/images/Logo.png`}
                        height="33px"
                    />
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            <Flex
                mt={"1.5"}
                direction="column"
                overflow="hidden"
                height="auto"
                overflowY="auto"
            >
                <VStack align="stretch">
                    <Box px={4}>
                        <Select
                            placeholder="Select Client..."
                            colorScheme="blue"
                            borderColor="blue.500"
                            color="blue.500"
                            defaultValue={localStorage.getItem("clientId")}
                            onChange={(e) => {
                                if (e.target.value.length) {
                                    dispatch(
                                        updateCurrentClient(e.target.value)
                                    );
                                    mutate(
                                        {
                                            id: e.target.value,
                                        },
                                        {
                                            onSuccess: (
                                                data,
                                                variables,
                                                context
                                            ) => {
                                                localStorage.setItem(
                                                    "client",
                                                    JSON.stringify(data.client)
                                                );
                                            },
                                        }
                                    );
                                } else {
                                    localStorage.removeItem("clientId");
                                    localStorage.removeItem("client");
                                }
                            }}
                        >
                            <For
                                each={clients}
                                render={(client) => (
                                    <option value={client.id}>
                                        {client.name}
                                    </option>
                                )}
                            />
                        </Select>
                    </Box>

                    {isDeveloper
                        ? DeveloperMenuList.map((link) => (
                              <NavItem
                                  key={link.id}
                                  path={link.path}
                                  icon={link.icon}
                                  title={link.name}
                              />
                          ))
                        : isAdmin
                        ? MenuList.map((link) => (
                              <NavItem
                                  key={link.id}
                                  path={link.path}
                                  icon={link.icon}
                                  title={link.name}
                              />
                          ))
                        : UserMenuList.map((link) => (
                              <NavItem
                                  key={link.id}
                                  path={link.path}
                                  icon={link.icon}
                                  title={link.name}
                              />
                          ))}
                </VStack>
            </Flex>
        </Box>
    );
};

export default Sidebar;
