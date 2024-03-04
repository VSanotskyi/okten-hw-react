import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setCars, selectCars} from "../../store/cars";
import {carServices} from "../../services";
import {List} from "../List/List";
import {CarItem} from "./CarItem/CarItem";
import {CarForm} from "./CarForm/CarForm";

const Cars = () => {
    const dispatch = useDispatch();

    const cars = useSelector(selectCars);

    const getAllCars = async () => {
        try {
            const {data} = await carServices.getAll();
            dispatch(setCars(data));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllCars();
    }, []);

    return (
        <div>
            <CarForm getAllCars={getAllCars}/>
            {cars.length > 0 && (
                <List
                    items={cars}
                    render={(item) => <CarItem key={item.id}
                                               car={item}
                                               getAllCars={getAllCars}
                    />}
                />)}
        </div>
    );
};

export {Cars};