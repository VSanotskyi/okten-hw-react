import axios from "axios";

import {urls} from "../constants/urls";

axios.defaults.baseURL = urls.comments.base_URL;

const getAll = async () => {
    try {
        const res = await axios(urls.comments.endpointWithLimit);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

const add = async (comment) => {
    try {
        const res = await axios.post(urls.comments.endpoint, comment);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    getAll,
    add,
};