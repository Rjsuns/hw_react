import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null,
    carUpdate: null,
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setTrigger:(state)=>{
            state.trigger = !state.trigger;
        },
        setCarUpdate: (state, action) => {
            state.carUpdate = action.payload;
        }
    }
})

const {reducer: carsReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carActions,
    carsReducer
}