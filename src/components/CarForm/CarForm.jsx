import {useCallback, useEffect, useState} from "react";

import carsApi from "../../services/carsApi";
import css from "./CarForm.module.css";

const CarForm = ({addCar, updateCar, car, setCar, isUpdate, setIsUpdate}) => {

    const handleChange = ({target: {name, value}}) => {
        setCar(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdate) {
            const newCar = {
                brand: car.brand,
                price: car.price,
                year: car.year,
            };
            updateCar(car.id, newCar);
            setIsUpdate(false);
        } else {
            addCar(car);
        }

        setCar({brand: "", price: "", year: ""});
    };

    return (
        <div className={css.wrapper}>
            <h2>Create new car</h2>
            <form className={css.form}
                  onSubmit={handleSubmit}
            >
                <label>
                    <span className={css.span}>Brand</span>
                    <input className={css.input}
                           placeholder="Audi"
                           type="text"
                           name="brand"
                           value={car.brand}
                           onChange={handleChange}
                           required
                    />
                </label>
                <label>
                    <span className={css.span}>Price</span>
                    <input className={css.input}
                           placeholder="0 - 1000000"
                           type="text"
                           name="price"
                           value={car.price}
                           onChange={handleChange}
                           required
                    />
                </label>
                <label>
                    <span className={css.span}>Year</span>
                    <input className={css.input}
                           type="text"
                           name="year"
                           placeholder="1990 - 2023"
                           value={car.year}
                           onChange={handleChange}
                           required
                    />
                </label>
                <button type="submit"
                        className={css.btn}
                >{isUpdate ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
};

export default CarForm;