import React, { useEffect, useMemo } from "react";
import {
    Avatar,
    Button,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import Datatable from "../../../../components/Datatable/Datatable";
import { useGetAdUploadAuditLogs } from "../../../../hooks/campaign-briefs/useGetAdUploadAuditLogs";
import { useParams } from "react-router-dom";
import "../../style/AdUploadList.css";
import { useSelector } from "react-redux";
import moment from "moment";

const AuditLogsList = () => {
    const { id, fbId } = useParams();
    const clientId = useSelector((state) => state.client.clientId);

    const { data, mutate } = useGetAdUploadAuditLogs();

    useEffect(() => {
        mutate({
            clientId,
            campaignId: id,
            adUploadId: fbId,
        });
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: "User",
                accessor: "user.name",
                Cell: (data) => (
                    <HStack align="center">
                        {data?.row?.original?.user?.other_info?.profile_pic_url ? (
                            <Avatar
                                size="sm"
                                src={`${process.env.REACT_APP_API_URL}/uploads/${data.row.original.user.other_info.profile_pic_url}`}
                                name={data.row.original.user.name}
                            />
                        ) : (
                            <Avatar size="sm" name={data.row.original.user.name} />
                        )}
                        <Text>{data.row.original.user.name}</Text>
                    </HStack>
                ),
            },
            {
                Header: "Timestamp",
                accessor: "created_at",
                Cell: (data) => {
                    return (
                        <>
                            {`${moment(data.row.original.created_at).format(
                                "h:mm:ss A"
                            )}, ${moment(data.row.original.created_at).format(
                                "MMMM DD YYYY"
                            )}`}
                            <br />
                            <p style={{ marginTop: "5px" }}>GMT-07:00</p>
                        </>
                    );
                },
            },
            {
                Header: "Action",
                accessor: "state",
            },
            // {
            //     Header: "Details",
            //     accessor: "ad_upload_type",
            // },
        ],
        []
    );

    return (
        <div className="ad-upload-list">
            <Heading color={"gray"} fontSize="lg" my={5} mb={7}>
                Audit Logs
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
                    rightIcon={<MdFileDownload />}
                >
                    Download Data
                </Button>
            </div>
            <Datatable data={data?.auditLogs || []} columns={columns} />
        </div>
    );
};

export default AuditLogsList;
