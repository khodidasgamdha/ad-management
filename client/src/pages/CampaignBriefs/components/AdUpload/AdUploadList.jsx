import React, { useEffect, useMemo } from "react";
import {
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
import { useNavigate, Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";

import Datatable from "../../../../components/Datatable";
import { useAdUploadList } from "../../../../hooks/campaign-briefs/useAdUploadList";
import { profile } from "../../../../atoms/authAtom";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";

const AdUploadList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    access_info: { clients },
  } = useRecoilValue(profile);

  const { data, refetch } = useAdUploadList(clients[0]?.id, id);

  useEffect(() => {
    refetch()
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Type",
        accessor: "ad_upload_type",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Added on",
        accessor: "created_at",
      },
      {
        Header: () => <Text>Actions</Text>,
        accessor: "actions",
        Cell: (data) => (
          <HStack>
            <Button
              as={Link}
              size="sm"
              variant="outline"
              aria-label="View details"
              icon={<FiEye />}
              to={`/campaign-brief/${id}/ad-upload/fb/${data.row.original.id}`}
            >
              View
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
      <Datatable data={data?.adUploads || []} columns={columns} />
    </div>
  );
};

export default AdUploadList;
