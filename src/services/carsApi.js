import axios from "axios";
import {BASE_URL, carsUrl} from "../constants/carsUrl";

axios.defaults.baseURL = BASE_URL;

const getAll = async () => {
    try {
        const {data} = await axios(carsUrl.base);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const add = async (car) => {
    try {
        const {data} = await axios.post(carsUrl.base, car);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const del = async (id) => {
    try {
        const {data} = await axios.delete(carsUrl.byId(id));
        return data;
    } catch (error) {
        console.error(error);
    }
};

const update = async (id, newCar) => {
    try {
        const {data} = await axios.put(carsUrl.byId(id), newCar);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default {
    getAll,
    add,
    del,
    update,
};
