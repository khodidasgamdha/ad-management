import { useQuery } from "react-query";
import axios from "../../helpers/axios";

export const useGetClientUsers = (clientId) => {
    return useQuery(["comments", clientId], async () => {
        return axios
            .get(`/user/me/client-users/${clientId}`, {
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
