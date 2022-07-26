import React, { useState } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Container,
  Image,
  Button,
  Img,
  Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { TEXT_COLOR } from "../../../../layout/constant/MenuList";

const FacebookAdPreview = ({ data }) => {
    const [index, setIndex] = useState(0)

    const getSlider = () => {
        const slides = data?.images && data.images.map((el, ind) => (
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
            onClick={() =>  setIndex(ind)}
            cursor="pointer"
          >{ind + 1}</Text>
        ))
        return slides;
    }

    return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4} className="fb-upload">
      <GridItem w="full" colSpan={{ base: 6, lg: 6 }}>
        <Heading fontSize="lg" my={4} color={TEXT_COLOR}>
          { data?.images?.[index]?.filename }
        </Heading>
        <Box borderWidth="2px" borderColor="gray" p={10} background="#FFF8F4">
          <Container>
            <Flex alignItems="center" flexDirection="row" justify="center">
              {/* <div className="col-md-6"> */}

              <Box border="2px" borderColor="#757998">
                <Flex justify="space-between" p={2} px={3} background="white">
                  <Flex alignItems="center" flexDirection="row">
                    <Image
                      src={ data?.images?.[index]?.imageUrl }
                      boxSize="50px"
                      // className="rounded-circle"
                      alt=""
                      borderRadius="full"
                    />
                    <Flex flexDirection="column" ml={2}>
                      <span className="font-weight-bold">{ data?.name }</span>
                      <small className="text-primary">Sponsored</small>
                    </Flex>
                  </Flex>
                  <Flex flexDirection="row" mt={1} className="ellipsis">
                    <i className="fa fa-ellipsis-h">...</i>{" "}
                  </Flex>
                </Flex>
                <Box px={3} pb={3} background="white">
                  <Text className="text-justify" px={3}>
                    { data?.message }
                  </Text>
                </Box>
                <Img
                  src={ data?.images?.[index]?.imageUrl }
                  alt=""
                  boxSize="568px"
                />
                <Box background="#F1F2F6" px={3} py={3}>
                  <Text fontSize="sm" color={TEXT_COLOR}>
                    FORM ON FACEBOOK
                  </Text>
                  <Flex alignItems="center" justify="space-between">
                    <Text fontSize="md" color="black">
                      { data?.headline }
                    </Text>
                    <Button
                      background="#E5E6EB !important"
                      color="#81848B !important"
                    >
                      { data?.type }
                    </Button>
                  </Flex>
                  <Text fontSize="sm">{ data?.description }</Text>
                </Box>
              </Box>
              {/* </div> */}
            </Flex>
          </Container>
        </Box>
        <Flex templateColumns="repeat(12, 1fr)" justifyContent="space-between">
          <Button 
            leftIcon={<ArrowBackIcon color="gray" w={10} h={10} />} 
            py={8}
            variant='ghost'
            onClick={() => setIndex(index > 1 ? index-1 : 0)} 
          />
          <Spacer />
          {
              getSlider()
          }
          <Spacer />
          <Button 
            leftIcon={<ArrowForwardIcon color="gray" w={10} h={10} />} 
            py={8}
            variant='ghost' 
            onClick={() => setIndex(data?.images?.length > index+1 ? index + 1 : index)}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default FacebookAdPreview;
