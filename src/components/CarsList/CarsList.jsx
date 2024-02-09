import CarItem from "../CarItem/CarItem";

const CarsList = ({cars, setCarForUpdate, setIsUpdateCarsList}) => {
    return (
        <ul>
            {cars.map(car => <CarItem key={car.id}
                                      car={car}
                                      setCarForUpdate={setCarForUpdate}
                                      setIsUpdateCarsList={setIsUpdateCarsList}
            />)}
        </ul>
    );
};

export default CarsList;