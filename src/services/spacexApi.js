import axios from "axios";

const baseUrl = "https://api.spacexdata.com/v3/";

axios.defaults.baseURL = baseUrl;

export const getSpacexApi = async () => {
    const result = await axios("launches/");
    return result.data;
};