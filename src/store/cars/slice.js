import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: {
        items: [],
        carForUpdate: null,
    },
};

const carsSlice = createSlice({
    name: "carsSlice",
    initialState,
    reducers: {
        setCars: (state, {payload}) => {
            state.cars.items = payload;
        },
        updateCar: (state, {payload}) => {
            state.cars.carForUpdate = payload;
        },
    },
});

const {actions, reducer: carsReducer} = carsSlice;

const {setCars, updateCar} = actions;

export {
    carsReducer,
    setCars,
    updateCar,
};