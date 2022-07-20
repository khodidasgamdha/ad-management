import React, { useMemo } from "react";
import {
  Badge,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";

import Datatable from "../../../components/Datatable";
import { useGetAdUploadList } from "../../../hooks/campaign-briefs/useGetAdUploadList";
import { profile } from "../../../atoms/authAtom";
import { useParams } from "react-router-dom";
import "../style/AdUploadList.css";
import CreateForm from "./CreateForm";

const AdUploadList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    access_info: { clients },
  } = useRecoilValue(profile);

  const { data, isLoading, isFetching, refetch } = useGetAdUploadList(
    clients[0]?.id, id
  );

  const columns = useMemo(
    () => [
      {
        Header: "Ad NAME",
        accessor: "name",
        Cell: (data) => {
          console.log(data);
          return (
            <div className="ad-name">
              <img src="https://tinyurl.com/4zxshwbk" alt="ad" />
              {data.row.original.campaignName}
            </div>
          );
        },
      },
      {
        Header: "Type",
        accessor: "",
      },
      {
        Header: "STATUS",
        accessor: "state",
        Cell: (data) => {
          return (
            <Badge
              variant="subtle"
              colorScheme={
                data.row.original.state === "ACTIVE"
                  ? "green"
                  : data.row.original.state === "INACTIVE"
                  ? "red"
                  : data.row.original.state === "ON_HOLD"
                  ? "yellow"
                  : "blue"
              }
            >
              {data.row.original.state}
            </Badge>
          );
        },
      },
      // {
      //   Header: "START DATE",
      //   accessor: "start_date",
      // },
      {
        Header: "Added on",
        accessor: "end_date",
      },
      {
        Header: () => <Text>Actions</Text>,
        accessor: "actions",
        Cell: (data) => (
          <HStack>
            <Button
              // as={Link}
              size="sm"
              variant="outline"
              aria-label="View details"
              icon={<FiEye />}
              // to={to || `/client/${row.id}`}
            >
              View/Edit
            </Button>
            <Button size="sm" variant="outline" colorScheme="pink">
              Delete
            </Button>
          </HStack>
        ),
      },
    ],
    []
  );

  return (
    <div className="ad-upload-list">
      <Heading color={"gray"} fontSize="lg" my={5} mb={7}>
        Ad Uploads
      </Heading>
      <div className="search">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="Search" />
          </InputGroup>
        </Stack>
        <Button
          colorScheme="blue"
          backgroundColor="blue.400"
          borderRadius={4}
          px="10"
          marginTop={5}
          rightIcon={<BiPlusCircle />}
          onClick={() => navigate(`/campaign-brief/${id}/ad-upload/new/fb`)}
        >
          Facebook
        </Button>
        <Button
          colorScheme="blue"
          backgroundColor="blue.400"
          borderRadius={4}
          px="10"
          marginTop={5}
          rightIcon={<BiPlusCircle />}
        >
          DV360
        </Button>
      </div>
      <Datatable data={data?.campaigns || []} columns={columns} />
    </div>
  );
};

export default AdUploadList;
