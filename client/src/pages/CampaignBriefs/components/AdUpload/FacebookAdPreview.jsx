import React, { useState, useEffect } from "react";
import {
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Box,
    Container,
    Button,
    Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { TEXT_COLOR } from "../../../../layout/constant/MenuList";

const FacebookAdPreview = ({ data }) => {
    const [index, setIndex] = useState(0);
    const [ads, setAds] = useState([]);

    useEffect(() => {
        setAds(data?.previews);
    }, [data?.previews]);

    const getSlider = () => {
        if (ads && Object.keys(ads).length) {
            const slides = Object.keys(ads).map((el, ind) => (
                <Text
                    py={3}
                    px={5}
                    mx={2}
                    my={5}
                    borderTopRadius="50%"
                    borderBottomRadius="50%"
                    key={ind}
                    color={ind === index ? "white" : "black"}
                    background={ind === index ? "grey" : "white"}
                    onClick={() => setIndex(ind)}
                    cursor="pointer"
                >
                    {ind + 1}
                </Text>
            ));
            return slides;
        }
    };

    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={4} className="fb-upload">
            <GridItem w="full" colSpan={{ base: 6, lg: 6 }}>
                <Heading fontSize="lg" my={4} color={TEXT_COLOR}>
                    {ads && Object.keys(ads)?.[index]}
                </Heading>
                <Box
                    borderWidth="2px"
                    borderColor="gray"
                    p={10}
                    background="#FFF8F4"
                >
                    <Container>
                        <Flex
                            alignItems="center"
                            flexDirection="row"
                            justify="center"
                        >
                            <Box border="2px" borderColor="#757998">
                                <iframe
                                    src={ads?.[Object.keys(ads)?.[index]]?.src}
                                    title={ads && Object.keys(ads)?.[index]}
                                    width="400px"
                                    height="450px"
                                    scrolling="no"
                                />
                            </Box>
                        </Flex>
                    </Container>
                </Box>
                <Flex
                    templateColumns="repeat(12, 1fr)"
                    justifyContent="space-between"
                >
                    <Button
                        leftIcon={<ArrowBackIcon color="gray" w={10} h={10} />}
                        py={8}
                        variant="ghost"
                        onClick={() => setIndex(index > 1 ? index - 1 : 0)}
                    />
                    <Spacer />
                    {getSlider()}
                    <Spacer />
                    <Button
                        leftIcon={<ArrowForwardIcon color="gray" w={10} h={10} />}
                        py={8}
                        variant="ghost"
                        onClick={() =>
                            setIndex(
                                ads && Object.keys(ads)?.length > index + 1
                                    ? index + 1 : index
                            )
                        }
                    />
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default FacebookAdPreview;
