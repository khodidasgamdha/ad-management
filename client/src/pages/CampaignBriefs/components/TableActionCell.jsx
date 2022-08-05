import { Button, HStack } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCreateClone } from "../../../hooks/campaign-briefs/useCreateClone";
const TableActionCell = ({ data }) => {
    const { mutate, isLoading } = useCreateClone();

    return (
        <HStack>
            <Button
                as={Link}
                size="sm"
                variant="outline"
                aria-label="View details"
                icon={<FiEye />}
                to={`/campaign-briefs/${data.row.original.id}`}
            >
                View/Edit
            </Button>
            <Button
                size="sm"
                variant="outline"
                isLoading={isLoading}
                onClick={() => {
                    mutate({
                        clientId: data.row.original.client_id,
                        campaignBriefId: data.row.original.id,
                    });
                }}
                leftIcon={<FiCopy />}
            >
                Clone
            </Button>
        </HStack>
    );
};

export default TableActionCell;
