import axios from "axios";
import {urls} from "../constants/urls";

axios.defaults.baseURL = urls.users.base_URL;

const getAll = async () => {
    try {
        const result = await axios(urls.users.usersEndpoint);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

const add = async (user) => {
    try {
        const result = await axios.post(urls.users.usersEndpoint, user);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

export default {
    getAll,
    add,
};