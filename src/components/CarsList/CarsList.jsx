import {useEffect, useState} from "react";

import CarItem from "../CarItem/CarItem";
import CarForm from "../CarForm/CarForm";
import carsApi from "../../services/carsApi";

const CarsList = () => {
    const [cars, setCars] = useState(null);
    const [car, setCar] = useState({brand: "", price: "", year: ""});
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        const res = await carsApi.getAll();
        setCars(res);
    };

    const addCar = async (data) => {
        const res = await carsApi.add(data);
        setCars(prev => ([...prev, res]));
    };

    const delCar = async (id) => {
        await carsApi.del(id);
        setCars(prev => prev.filter(el => el.id !== id));
    };

    const updateCar = async (id, data) => {
        await carsApi.update(id, data);
        setCars(prev => prev.map(el => el.id === id ? {id: id, ...data} : el));
    };

    return (
        <div>
            <CarForm addCar={addCar}
                     updateCar={updateCar}
                     car={car}
                     setIsUpdate={setIsUpdate}
                     isUpdate={isUpdate}
                     setCar={setCar}
            />
            {cars && <ul>
                {cars.map(car =>
                    <CarItem key={car.id}
                             car={car}
                             delCar={delCar}
                             setCar={setCar}
                             setIsUpdate={setIsUpdate}
                    />)}
            </ul>}
        </div>
    );
};

export default CarsList;