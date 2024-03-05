import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";
import {carService} from "../../services";



const CarForm = () => {
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand, {shouldValidate: true})
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }
    }, [carUpdate, setValue]);

    const update = async (car) => {
        await carService.updateById(carUpdate.id, car)
        dispatch(carActions.setTrigger())
        dispatch(carActions.setCarUpdate(null))
        reset()
    }

    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.setTrigger())
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carUpdate ? 'update' : 'save'}</button>
                {errors.brand && <div>brand: {errors.brand.message}</div>}
                {errors.price && <div>price: {errors.price.message}</div>}
                {errors.year && <div>year: {errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};