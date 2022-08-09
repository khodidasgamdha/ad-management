import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleThemeMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Tooltip
            placement="left"
            label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
            aria-label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
        >
            <IconButton
                variant="ghost"
                aria-label={colorMode === "light" ? "Light Mode" : "Dark Mode"}
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
            />
        </Tooltip>
    );
};

export default ToggleThemeMode;
