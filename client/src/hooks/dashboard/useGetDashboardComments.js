import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useGetDashboardComments = () => {
    return useMutation(() =>
        axios({
            method: "GET",
            url: `/user/me/comments/1`,
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
