import {useEffect} from "react";
import {Car} from "./Car";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";
import {CarForm} from "./CarForm";

const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setCars(data)))
    }, [trigger, dispatch]);

    return (
        <div>
            <CarForm/>
                <hr/>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};