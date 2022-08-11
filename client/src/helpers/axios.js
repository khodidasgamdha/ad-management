import axios from "axios";
import refreshInterceptor from "axios-auth-refresh";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        AUTH_JWT: localStorage.getItem("jwt"),
        AUTH_JWT_REFRESH: localStorage.getItem("jwtRefresh"),
    },
    withCredentials: false,
    crossdomain: true,
});

const refreshAuthLogic = (failedRequest) => {
    return instance({
        method: "post",
        url: "/refresh-token",
        withCredentials: true,
        skipAuthRefresh: true,
    })
        .then(() => {
            return Promise.resolve();
        })
        .catch((error) => {
            console.log(error.response);
            alert("Your session has expired. Please log in again.");
            window.location = "/login";
            return Promise.reject();
        });
};

refreshInterceptor(instance, refreshAuthLogic);

export default instance;
