import {useDispatch} from "react-redux";

import {carServices} from "../../../services";
import {updateCar} from "../../../store/cars/index";
import css from "./CarItem.module.css";

const CarItem = ({car, getAllCars}) => {
    const {brand, price, id, year} = car;
    const dispatch = useDispatch();

    const handleDelete = async () => {
        await carServices.delCar(id);
        getAllCars();
    };

    const handleUpdate = () => {
        dispatch(updateCar(car));
    };

    return (
        <li className={css.item}>
            <div>
                <p>brand: {brand}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>
            </div>
            <div className={css.btnWrapper}>
                <button className={css.btn}
                        onClick={handleDelete}
                >Delete
                </button>
                <button className={css.btn}
                        onClick={handleUpdate}
                >Update
                </button>
            </div>
        </li>
    );
};

export {CarItem};