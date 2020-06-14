import axios, { AxiosResponse } from "axios";
import {AvailableCar, PickedCar} from "../Model";

const BACKEND_URL: string= "http://localhost:3000/";

export function getFromUrl<T>(url: string): Promise<T> {
  return axios.get<T>(url).then((response: AxiosResponse<T>) => {
    return response.data;
  });
}

export function fetchAvailableCars(): Promise<AvailableCar[]> {
  return getFromUrl<AvailableCar[]>(BACKEND_URL + "shortModels");
}

export function fetchPickedCarInfo(x:string): Promise<PickedCar[]>{
  return getFromUrl<PickedCar[]>(BACKEND_URL + "models?name=" + x )

}