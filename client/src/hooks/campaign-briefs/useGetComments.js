import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useGetComments = () => {
    return useMutation((values) =>
        axios({
            method: "GET",
            url: `/client/${values.clientId}/campaign-brief/${values.campaignId}/comment`,
            withCredentials: true,
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.data.data;
                }
            })
            .catch((err) => {
                return err.response;
            })
    );
};

export const useGetFacebookAdComments = () => {
    return useMutation((values) =>
        axios({
            method: "GET",
            url: `/client/${values.clientId}/campaign-brief/${values.campaignId}/ad-upload/${values.facebookAdId}/comment`,
            withCredentials: true,
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.data.data;
                }
            })
            .catch((err) => {
                return err.response;
            })
    );
};
