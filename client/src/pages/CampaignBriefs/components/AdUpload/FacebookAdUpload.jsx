import React from "react";
import {
  Center,
  css,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { TEXT_COLOR } from "../../../../layout/constant/MenuList";
import "../../style/FacebookAdUpload.css";
import { FacebookAdDetails } from "./FacebookAdDetails";
import FacebookAdPreview from "./FacebookAdPreview";
import { useGetFbAdUpload } from "../../../../hooks/campaign-briefs/useGetFbAdUpload";
import { useRecoilValue } from "recoil";
import { profile } from "../../../../atoms/authAtom";
import { useState } from "react";

const FacebookAdUpload = () => {
  const [images, setImages] = useState([])
  const [tabIndex, setTabIndex] = useState(0)
  const navigate = useNavigate();
  const { id, fbId } = useParams();

  const {
    access_info: { clients },
  } = useRecoilValue(profile);

  const { data } = useGetFbAdUpload(clients[0]?.id, id, fbId);

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4} className="fb-upload">
      <GridItem w="full" colSpan={{ base: 6, lg: 6 }} mb={{ base: 3, lg: 0 }}>
        <Heading fontSize="sm" mb={7} color={TEXT_COLOR}>
          <Flex
            onClick={() => navigate(`/campaign-briefs/${id}`)}
            cursor={"pointer"}
          >
            <Center marginRight={2}>
              <BiArrowBack color="#A7A9BD" />
            </Center>
            <Center>
              <Text
                css={css({
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#A7A9BD",
                })}
              >
                Back to Campaign Brief
              </Text>
            </Center>
          </Flex>
        </Heading>
        <Heading fontSize="4xl" mb={4} color={TEXT_COLOR}>
          Facebook Ad Upload
        </Heading>
        <Tabs
          defaultIndex={tabIndex}
          size="sm"
          w="full"
          colorScheme="black"
          overflow="hidden"
        >
          <TabList
            overflowX="auto"
            css={css({
              scrollbarWidth: "none",
              "::-webkit-scrollbar": { display: "none" },
              WebkitOverflowScrolling: "touch",
              boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
              border: "0 none",
            })}
          >
            <Tab whiteSpace="nowrap">Details</Tab>
            <Tab whiteSpace="nowrap" isDisabled={images?.images?.length < 1}>Preview</Tab>
            <Tab whiteSpace="nowrap">Comments</Tab>
            <Tab whiteSpace="nowrap">Audit Logs</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FacebookAdDetails 
                getImages={(el) => setImages(el)} 
                goToPreview={() => setTabIndex(1)}
                data={data?.adUpload} 
              />
            </TabPanel>
            <TabPanel>
              <FacebookAdPreview data={images} />
            </TabPanel>
            <TabPanel>3</TabPanel>
            <TabPanel>4</TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
};

export default FacebookAdUpload;
