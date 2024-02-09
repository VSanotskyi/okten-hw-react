import {removeById} from "../../services/carsServices";

const CarItem = ({car, setCarForUpdate, setIsUpdateCarsList}) => {
    const {id, brand, price, year} = car;

    const handleDel = async () => {
        await removeById(id);
        setIsUpdateCarsList(prev => !prev);
        setCarForUpdate(null);
    };

    return (
        <li>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={handleDel}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
        </li>
    );
};

export default CarItem;