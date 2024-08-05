import axios from "axios";

//deployment API
const axiosConfig = axios.create({
    baseURL: "https://fakestoreapi.com",
});


let bearerToken = "";

export const setAxiosConfig = (token: string) => {
    bearerToken = token;

    if (bearerToken !== "") {
        axiosConfig.defaults.headers.Authorization = `Bearer ${bearerToken}`;
    } else {
        delete axiosConfig.defaults.headers.Authorization;
    }
};

axiosConfig.interceptors.request.use((config) => {
    return config;
});


export { axiosConfig };
