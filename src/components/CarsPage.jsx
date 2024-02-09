import {useEffect, useState} from "react";
import CarsForm from "./CarsForm/CarsForm";
import CarsList from "./CarsList/CarsList";
import {getAll} from "../services/carsServices";

const CarsPage = () => {
    const [cars, setCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [isUpdateCarsList, setIsUpdateCarsList] = useState(false);

    useEffect(() => {
        getAllCars();
    }, [isUpdateCarsList]);

    const getAllCars = async () => {
        const result = await getAll();
        setCars(result);
    };


    return (
        <div>
            <CarsForm setIsUpdateCarsList={setIsUpdateCarsList}
                      carForUpdate={carForUpdate}
                      setCarForUpdate={setCarForUpdate}

            />
            {cars && <CarsList cars={cars}
                               setCarForUpdate={setCarForUpdate}
                               setIsUpdateCarsList={setIsUpdateCarsList}
            />}
        </div>
    );
};

export default CarsPage;