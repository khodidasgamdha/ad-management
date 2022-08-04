import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useGetFbAccounts = () => {
    return useMutation((values) =>
        axios({
            method: "GET",
            url: `/client/fb-ad-accounts`,
            withCredentials: false,
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
