import {apiServices} from "./apiServices";
import {cars} from "../constants";

export const carServices = {
    getAll: () => apiServices.get(cars),
    delCar: (id) => apiServices.delete(cars + "/" + id),
    addCar: (car) => apiServices.post(cars, car),
    updateCar: (id, car) => apiServices.put(cars + "/" + id, car),
};

