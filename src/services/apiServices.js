import axios from "axios";

import urls from "../constants/urls";

axios.defaults.baseURL = urls.BASE_URL;

const getAllUsers = async () => {
    const {data} = await axios(urls.USERS);
    return data;
};

const getUserById = async (id) => {
    const {data} = await axios(urls.USERS + "/" + id);
    return data;
};

const getPostsByUserId = async (id) => {
    const {data} = await axios(`${urls.USERS}/${id}/${urls.POSTS}`);
    return data;
};

const getAllCommentsByPostId = async (id) => {
    const {data} = await axios(`${urls.POSTS}/${id}${urls.COMMENTS}`);
    return data;
};

export default {
    getAllUsers,
    getUserById,
    getPostsByUserId,
    getAllCommentsByPostId,
};