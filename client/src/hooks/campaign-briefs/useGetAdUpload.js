import { useQuery } from "react-query";
import axios from "../../helpers/axios";

export const useGetAdUpload = (clientId, campaignId, adId) => {
    return useQuery(["campaign", clientId, campaignId,adId], async () => {
        return axios
            .get(`/client/${clientId}/campaign-brief/${campaignId}/ad-upload/${adId}`, {
                withCredentials: false,
            })
            .then((res) => {
                if (res.status === 200) {
                    return res.data.data;
                }
            })
            .catch((err) => {
                return err.response;
            });
    });
};
