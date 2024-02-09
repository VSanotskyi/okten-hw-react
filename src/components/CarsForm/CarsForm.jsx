import {useForm} from "react-hook-form";

import css from "./CarsForm.module.css";
import {add, updateById} from "../../services/carsServices";
import {useEffect} from "react";

const CarsForm = ({setIsUpdateCarsList, carForUpdate, setCarForUpdate}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm({
        mode: "all",
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand);
            setValue("price", carForUpdate.price);
            setValue("year", carForUpdate.year);
        }
    }, [carForUpdate]);

    const save = async (car) => {
        const res = await add(car);
        if (res) setIsUpdateCarsList(prev => !prev);
        reset();
    };

    const update = async (car) => {
        const res = await updateById(carForUpdate.id, car);
        if (res) setIsUpdateCarsList(prev => !prev);
        setCarForUpdate(null);
        reset();
    };

    return (
        <form className={css.form}
              onSubmit={handleSubmit(carForUpdate ? update : save)}
        >
            <label className={css.label}>
                <span>Brand</span>
                <input className={css.input}
                       type="text"
                       required
                       {...register("brand", {
                           pattern: {
                               value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                               message: "1 - 20 character",
                           },
                       })}
                />
            </label>
            <label className={css.label}>
                <span>Price</span>
                <input className={css.input}
                       type="text"
                       required
                       {...register("price", {
                           valueAsNumber: true,
                           min: {value: 0, message: "min 0"},
                           max: {value: 1000000, message: "max 1000000"},
                       })}
                />
            </label>
            <label className={css.label}>
                <span>Year</span>
                <input className={css.input}
                       type="text"
                       required
                       {...register("year", {
                           valueAsNumber: true,
                           min: {value: 1990, message: "min 1990"},
                           max: {value: 2024, message: "min 2024"},
                       })}
                />
            </label>
            <button className={css.btn}
                    type="submit"
            >{carForUpdate ? "update" : "add"}
            </button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.yaer && <div>{errors.year.message}</div>}
        </form>
    );
};

export default CarsForm;