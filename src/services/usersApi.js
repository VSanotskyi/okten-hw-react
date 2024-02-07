import axios from "axios";
import {baseUrl, userUrl} from "../constants/userUrls";
import {nanoid} from "nanoid";

axios.defaults.baseURL = baseUrl;

export const postUserApi = async (data) => {
    try {
        const newUser = {
            id: nanoid(),
            ...data,
        };

        const res = await axios.post(userUrl, newUser);
        return res.data;

    } catch (error) {
        console.error(error);
    }
};