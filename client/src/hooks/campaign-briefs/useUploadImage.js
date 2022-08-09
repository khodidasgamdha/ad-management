import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useUploadImage = () => {
    const toast = useToast();

    return useMutation(
        async (values) => {
            let formData = new FormData();
            formData.append("adFile", values.adFile);
            return axios({
                method: "POST",
                url: `/client/${values.clientId}/campaign-brief/${values.campaignBriefId}/ad-upload/file-upload/${values.type}`,
                data: formData,
                withCredentials: false,
            })
                .then((res) => {
                    if (res.status === 200) {
                        return res.data.data;
                    }
                })
                .catch((err) => {
                    throw err.response.data.message;
                });
        },
        {
            onError: (error, variables, context) => {
                console.log(error);
                toast({
                    isClosable: true,
                    status: "error",
                    variant: "top-accent",
                    position: "top-right",
                    description: error,
                });
            },
        }
        // {
        //   onSuccess: (data, variables, context) => {
        //     toast({
        //       isClosable: true,
        //       status: "success",
        //       variant: "top-accent",
        //       position: "top-right",
        //       title: "Success",
        //       description: data?.message,
        //     });
        //     queryClient.invalidateQueries(["campaign", variables.clientId]);
        //   },
        //   onError: (error, variables, context) => {
        //     toast({
        //       isClosable: true,
        //       status: "error",
        //       variant: "top-accent",
        //       position: "top-right",
        //       description: error,
        //     });
        //   },
        // }
    );
};
