import { v4 as uuidv4 } from "uuid";
import {
    FiGrid,
    FiSettings,
    FiUser,
    FiCast,
    FiUsers,
    FiServer,
} from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";

export const TEXT_COLOR = () => useColorModeValue("gray.600", "gray.50");

export const MenuList = [
    {
        id: uuidv4(),
        name: "Dashboard",
        path: "/",
        icon: FiGrid,
    },
    {
        id: uuidv4(),
        name: "Campaign briefs",
        path: "/campaign-briefs",
        icon: FiCast,
    },
    {
        id: uuidv4(),
        name: "Users",
        path: "/users",
        icon: FiUser,
    },
    {
        id: uuidv4(),
        name: "Clients",
        path: "/clients",
        icon: FiUsers,
    },
    //   {
    //     id: uuidv4(),
    //     name: 'Config management',
    //     path: '/config',
    //     icon: FiServer,
    //   },
    {
        id: uuidv4(),
        name: "Settings",
        path: "/settings",
        icon: FiSettings,
    },
];

export const UserMenuList = [
    {
        id: uuidv4(),
        name: "Dashboard",
        path: "/",
        icon: FiGrid,
    },
    {
        id: uuidv4(),
        name: "Campaign briefs",
        path: "/campaign-briefs",
        icon: FiCast,
    },
    {
        id: uuidv4(),
        name: "Clients",
        path: "/clients",
        icon: FiUsers,
    },
    {
        id: uuidv4(),
        name: "Settings",
        path: "/settings",
        icon: FiSettings,
    },
];

export const DeveloperMenuList = [
    {
        id: uuidv4(),
        name: "Dashboard",
        path: "/",
        icon: FiGrid,
    },
    {
        id: uuidv4(),
        name: "Campaign briefs",
        path: "/campaign-briefs",
        icon: FiCast,
    },
    {
        id: uuidv4(),
        name: "Clients",
        path: "/clients",
        icon: FiUsers,
    },
    {
        id: uuidv4(),
        name: "Settings",
        path: "/settings",
        icon: FiSettings,
    },
];
