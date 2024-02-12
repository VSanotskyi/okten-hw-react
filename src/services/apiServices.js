import axios from "axios";
import {url} from "../constants/urls";

axios.defaults.baseURL = url.baseURL;

const getAllTodos = async () => {
    const {data} = await axios(url.TODOS_ENDPOINT);
    return data;
};

const getAllAlbums = async () => {
    const {data} = await axios(url.ALBUMS_ENDPOINT);
    return data;
};

const getAllComments = async () => {
    const {data} = await axios(url.COMMENTS_ENDPOINT);
    return data;
};

const getPostById = async (id) => {
    const {data} = await axios(url.POSTS_ENDPOINT + "/" + id);
    return data;
};

export {
    getAllTodos,
    getAllAlbums,
    getAllComments,
    getPostById,
};