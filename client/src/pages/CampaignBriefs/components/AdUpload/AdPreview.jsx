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

const AdPreview = ({ data }) => {
    const [index, setIndex] = useState(0);
    const [ads, setAds] = useState([]);

    useEffect(() => {
        if (data?.images) {
            setAds(data?.images);
        } else {
            setAds(data);
        }
    }, [data]);

    const getSlider = () => {
        if (ads?.length) {
            const slides = ads.map((el, ind) => (
                <Text
                    height={1}
                    borderRadius={5}
                    px={4}
                    mx={1}
                    mt={8}
                    key={ind}
                    background={ind === index ? "grey" : "silver"}
                    onClick={() => setIndex(ind)}
                    cursor="pointer"
                />
            ));
            return slides;
        }
    };

    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={4} className="fb-upload">
            <GridItem w="full" colSpan={{ base: 6, lg: 6 }}>
                <Heading fontSize="lg" my={4} color={TEXT_COLOR}>
                    {ads?.[index]?.filename}
                </Heading>
                <Box
                    borderWidth="2px"
                    borderColor="gray"
                    p={10}
                    background="#FFF8F4"
                >
                    <Container height="100%">
                        <Flex
                            alignItems="center"
                            flexDirection="row"
                            justify="center"
                        >
                            <Box border="2px" borderColor="#757998">
                                {data?.images ? (
                                    <iframe
                                        src={`${process.env.REACT_APP_API_URL}/uploads/${ads?.[index]?.imageUrl}`}
                                        title={ads?.[index]?.filename}
                                        width="400px"
                                        height={600}
                                        scrolling="no"
                                    />
                                ) : (
                                    <iframe
                                        src={ads?.[index]?.src}
                                        title={ads?.[index]?.filename}
                                        width="400px"
                                        height={600}
                                        scrolling="no"
                                    />
                                )}
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
                        leftIcon={
                            <ArrowForwardIcon color="gray" w={10} h={10} />
                        }
                        py={8}
                        variant="ghost"
                        onClick={() =>
                            setIndex(
                                ads && Object.keys(ads)?.length > index + 1
                                    ? index + 1
                                    : index
                            )
                        }
                    />
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default AdPreview;
