import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findMe() {

    /*const headers = {
        Authorization: "Bearer" + authService.getAccessToken()
    }*/

    const config : AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true
    }

    return requestBackend(config);
}