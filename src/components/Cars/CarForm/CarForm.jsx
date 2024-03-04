import {useEffect, useState} from "react";
import {carServices} from "../../../services";
import css from "./CarForm.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectUpdate} from "../../../store/cars/selectors";
import {updateCar} from "../../../store/cars";

const initState = {
    brand: "",
    price: "",
    year: "",
};

const CarForm = ({getAllCars}) => {
    const [car, setCar] = useState(initState);
    const dispatch = useDispatch();
    const carForUpdate = useSelector(selectUpdate);

    const handleChange = ({target: {value, name}}) => {
        setCar(prev => ({...prev, [name]: value}));
    };
    
    const handleAdd = async (e) => {
        e.preventDefault();
        await carServices.addCar(car);
        getAllCars();
        setCar(initState);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await carServices.updateCar(carForUpdate.id, car);
        dispatch(updateCar(null));
        getAllCars();
        setCar(initState);
    };

    useEffect(() => {
        carForUpdate && setCar({
            brand: carForUpdate.brand,
            price: carForUpdate.price,
            year: carForUpdate.year,
        });
    }, [carForUpdate]);

    return (
        <form className={css.form}
              onSubmit={carForUpdate ? handleUpdate : handleAdd}
        >
            <label>
                <p>Brand</p>
                <input type="text"
                       name={"brand"}
                       value={car.brand}
                       onChange={handleChange}
                       required
                />
            </label>
            <label>
                <p>Price</p>
                <input type="number"
                       name={"price"}
                       value={car.price}
                       onChange={handleChange}
                       required
                />
            </label>
            <label>
                <p>Year</p>
                <input type="number"
                       name={"year"}
                       value={car.year}
                       onChange={handleChange}
                       required
                />
            </label>
            <br/>
            <button type="submit">{carForUpdate ? "update" : "add"}</button>
        </form>
    );
};

export {CarForm};