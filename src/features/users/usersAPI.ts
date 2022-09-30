import axios, { AxiosResponse } from "axios";

interface FetchUserType {
  (url: string): Promise<AxiosResponse<any, any> | null>;
}

export const getData: FetchUserType = (url) => axios.get(url);
