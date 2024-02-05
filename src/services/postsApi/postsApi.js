import axios from "axios";
import {baseUrl, urls} from "../../constants/urls";

axios.defaults.baseURL = baseUrl;

export const getAllPosts = async () => {
    try {
        const result = await axios(urls.posts.base + "?_limit=10");
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getPostById = async (id) => {
    try {
        const result = await axios(urls.posts.byId(id));
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
};