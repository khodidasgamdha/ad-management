import React, { useEffect, useMemo, useState } from "react";
import {
    Button,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import Datatable from "../../../components/Datatable/Datatable";
import { useGetAuditLogs } from "../../../hooks/campaign-briefs/useGetAuditLogs";
import { useParams } from "react-router-dom";
import "../style/AdUploadList.css";
import { useSelector } from "react-redux";
import moment from "moment";

const AuditLogsList = () => {
    const { id } = useParams();
    const clientId = useSelector((state) => state.client.clientId);
    const [search, setSearch] = useState();
    const [auditLogList, setAuditLogList] = useState();
    const { data, mutate } = useGetAuditLogs();

    useEffect(() => {
        mutate({
            clientId,
            campaignId: id,
        });
    }, []);

    useEffect(() => {
        setAuditLogList(data?.auditLogs);
    }, [data]);

    useEffect(() => {
        if (search?.trim()) {
            const searchedAuditLog = auditLogList.filter((el) => {
                if (el?.user.name?.toLowerCase().includes(search.trim())) {
                    return true;
                } else if (
                    el?.created_at?.toLowerCase().includes(search.trim())
                ) {
                    return true;
                } else if (el?.state?.toLowerCase().includes(search.trim())) {
                    return true;
                }
            });
            setAuditLogList(searchedAuditLog);
        } else {
            setAuditLogList(data?.auditLogs);
        }
    }, [search]);

    const columns = useMemo(
        () => [
            {
                Header: "User",
                accessor: "user.name",
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
                        <Input
                            name="search"
                            type="tel"
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
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
            <Datatable data={auditLogList || []} columns={columns} />
        </div>
    );
};

export default AuditLogsList;
