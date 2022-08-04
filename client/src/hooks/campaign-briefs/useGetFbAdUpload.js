import { useQuery } from "react-query";
import axios from "../../helpers/axios";

export const useGetFbAdUpload = (clientId, campaignId, fbId) => {
    return useQuery(["campaign", clientId, campaignId,fbId], async () => {
        return axios
            .get(`/client/${clientId}/campaign-brief/${campaignId}/ad-upload/${fbId}`, {
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
