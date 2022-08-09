import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useGetAuditLogs = () => {
    return useMutation((values) =>
        axios({
            method: "GET",
            url: `/client/${values.clientId}/campaign-brief/${values.campaignId}/audit-log`,
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
