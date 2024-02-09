import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const getAll = async () => {
    try {
        const result = await apiServices(urls.cars.carsEndpoint);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

const add = async (car) => {
    try {
        const result = await apiServices.post(urls.cars.carsEndpoint, car);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

const removeById = async (id) => {
    try {
        const result = await apiServices.delete(
            urls.cars.carsEndpoint + `/${id}`);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

const updateById = async (id, newCar) => {
    try {
        const result = await apiServices.put(urls.cars.carsEndpoint + `/${id}`,
            newCar);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    getAll,
    add,
    removeById,
    updateById,
};