import { Avatar, Box, Image } from "@chakra-ui/react";
import moment from "moment";

export const Comments = ({ data }) => {
    return (
        <>
            {data?.map((el, index) => (
                <Box
                    border="2px solid"
                    borderColor="gray.300"
                    borderRadius={20}
                    key={index}
                    w="100%"
                    p={8}
                    mb={4}
                >
                    <Box display="flex">
                        <Box>
                            <Avatar
                                size="md"
                                // src="https://bit.ly/dan-abramov"
                                name={el?.user?.name}
                            />
                        </Box>
                        <Box width="65%" ml={10} mr={10} fontSize="16px">
                            <Box color="gray.700" fontWeight="semibold">{el?.user?.name}</Box>
                            <Box my={1} color="gray.500" fontWeight="semibold">
                                commented on
                            </Box>
                            <Box mb={1} color="gray.700" fontWeight="semibold">{el?.campaign?.name}</Box>
                            <Box fontStyle="italic" color="gray.500" fontWeight={400}>{el?.content}</Box>
                        </Box>
                        <Box fontSize="14px" color="gray.500">
                            {moment(el?.created_at).format(
                                "MMMM Do YYYY, h:mm a"
                            )}
                        </Box>
                    </Box>
                </Box>
            ))}
        </>
    );
};
