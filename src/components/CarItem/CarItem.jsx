const CarItem = ({car, delCar, setCar, setIsUpdate}) => {
    const {id, brand, price, year} = car;

    const handleClickUpdate = () => {
        setCar(car);
        setIsUpdate(true);
    };

    return (
        <li>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button style={{
                minWidth: "100px",
                padding: "3px 10px",
                marginBottom: "5px",
            }}
                    onClick={() => delCar(id)}
            >del
            </button>
            <br/>
            <button style={{minWidth: "100px", padding: "3px 10px"}}
                    onClick={handleClickUpdate}
            >update
            </button>
        </li>
    );
};

export default CarItem;