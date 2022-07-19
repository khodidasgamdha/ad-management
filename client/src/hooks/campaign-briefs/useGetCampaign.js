import { useQuery } from "react-query";
import axios from "../../helpers/axios";

export const useGetCampaign = (clientId, campaignId) => {
    return useQuery(["campaign", clientId], async () => {
        return axios
            .get(`/client/${clientId}/campaign-brief/${campaignId}`, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    return res.data.data;
                }
            })
            .catch((err) => {
                return err.response;
            });
    });
};
