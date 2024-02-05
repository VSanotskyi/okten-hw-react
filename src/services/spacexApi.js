import axios from "axios";
import {baseUrl, urls} from "../constants/urls";

axios.defaults.baseURL = baseUrl;

export const getSpacexApi = async () => {
    const result = await axios(urls.spacex.base);
    return result.data;
};