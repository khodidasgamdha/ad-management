import { useQuery } from "react-query";
import axios from "../../helpers/axios";

export const useAdUploadList = (clientId, campaignId) => {
    return useQuery(["campaign", clientId, campaignId], async () => {
        return axios
            .get(`/client/${clientId}/campaign-brief/${campaignId}/ad-upload`, {
                withCredentials: true,
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
