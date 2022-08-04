// import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useCreateAdPreview = () => {
    return useMutation(
        (values) => {
            return axios({
                method: "POST",
                url: `/client/${values.clientId}/campaign-brief/${values.campaignBriefId}/ad-upload/preview-ad`,
                withCredentials: false,
                data: {
                    call_to_action: {
                        type: values?.type,
                        value: {
                            link: values?.link
                        }
                    },
                    image_hash: values?.imageHash,
                    description: values?.description,
                    link: values?.link,
                    message: values?.message,
                    name: values?.name
                }
            })
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => {
                    throw err.response.data.message;
                });
        },
        // {
        //     onSuccess: (data, variables, context) => {
        //         toast({
        //             isClosable: true,
        //             status: "success",
        //             variant: "top-accent",
        //             position: "top-right",
        //             title: "Success",
        //             description: data?.message,
        //         });
        //     },
        //     onError: (error, variables, context) => {
        //         toast({
        //             isClosable: true,
        //             status: "error",
        //             variant: "top-accent",
        //             position: "top-right",
        //             description: error,
        //         });
        //     },
        // }
    );
};
