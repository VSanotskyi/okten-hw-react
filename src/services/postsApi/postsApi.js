import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

axios.defaults.baseURL = baseURL;


export const getAllPosts = async () => {
    try {
        const result = await axios("/posts?_limit=10");
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getPostById = async (id) => {
    try {
        const result = await axios("/posts/" + id);
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
};