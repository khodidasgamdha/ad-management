import { useMutation } from "react-query";
import axios from "../../helpers/axios";

export const useGetClients = () => {
    return useMutation(() =>
        axios({
            method: "GET",
            url: `/client`,
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
