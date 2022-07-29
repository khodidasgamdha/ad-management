import { Box } from "@chakra-ui/react";
import moment from "moment";

export const CommentsList = ({ data }) => {
    return (
        <>
            {data?.map((el) => (
                <Box bg="blue.50" w="100%" p={4} mb={4}>
                    <Box display="flex">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            textTransform="uppercase"
                            fontSize="14px"
                        >
                            {el?.user?.name}
                        </Box>
                        <Box width="70%" ml={10} mr={10} fontSize="16px">
                            {el?.content}
                        </Box>
                        <Box fontSize="14px" color="gray.500">
                            {moment(el?.created_at).format(
                                "MMMM Do YYYY, h:mm:ss a"
                            )}
                        </Box>
                    </Box>
                </Box>
            ))}
        </>
    );
};
