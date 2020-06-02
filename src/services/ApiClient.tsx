import axios, { AxiosResponse } from "axios";

export function getFromUrl<T>(url: string): Promise<T> {
    return axios.get<T>(url).then((response: AxiosResponse<T>) => {
        return response.data;
    });
}

// export function getCarInfo() {
//    return getFromUrl("http://localhost:3000/models");
//
// }