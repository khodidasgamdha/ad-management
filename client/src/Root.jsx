import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@fontsource/poppins/latin.css";
import "@fontsource/lora/latin.css";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

const Root = () => {
    const theme = extendTheme({
        components: {
            Button: {
                defaultProps: {
                    colorScheme: "blue",
                },
            },
            Checkbox: {
                defaultProps: {
                    colorScheme: "blue",
                },
            },
        },
        config: {
            initialColorMode: "light",
            useSystemColorMode: false,
        },
        fonts: {
            body: '"Poppins", sans-serif',
            heading: '"Lora", serif',
        },
    });

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
                staleTime: Infinity,
            },
        },
    });

    return (
        <ChakraProvider theme={theme}>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <Routes />
                    </Provider>
                </QueryClientProvider>
            </RecoilRoot>
        </ChakraProvider>
    );
};

export default Root;
