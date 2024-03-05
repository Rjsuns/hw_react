import {useDispatch} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";


const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carService.deleteById(id)
        dispatch(carActions.setTrigger())
    };

    return (
        <div>
            <div>id :{id}</div>
            <div>brand :{brand}</div>
            <div>year :{year}</div>
            <div>price :{price}</div>
            <button onClick={() => dispatch(carActions.setCarUpdate(car))}> update </button>
            <button onClick={deleteCar}> delete </button>
        </div>
    );
};

export {Car};