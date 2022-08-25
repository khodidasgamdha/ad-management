import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useUpdateAdUploadStatus = () => {
    const toast = useToast();

    return useMutation(
        (values) => {
            return axios({
                method: "PUT",
                url: `/client/${values.clientId}/campaign-brief/${values.campaignId}/ad-upload/${values.adUploadId}`,
                withCredentials: false,
                data: {
                    status: values.status,
                },
            })
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => {
                    throw err.response.data.message;
                });
        },
        {
            onSuccess: (data, variables, context) => {
                toast({
                    isClosable: true,
                    status: "success",
                    variant: "top-accent",
                    position: "top-right",
                    title: "Success",
                    description: data?.message,
                });
            },
            onError: (error, variables, context) => {
                toast({
                    isClosable: true,
                    status: "error",
                    variant: "top-accent",
                    position: "top-right",
                    description: error,
                });
            },
        }
    );
};
