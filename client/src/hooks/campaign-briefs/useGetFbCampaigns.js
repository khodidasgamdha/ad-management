import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useGetFbCampaigns = () => {
    return useMutation((values) =>
        axios({
            method: "GET",
            url: `/client/${values.clientId}/campaign-brief/${values.campaignId}/fb-campaign`,
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