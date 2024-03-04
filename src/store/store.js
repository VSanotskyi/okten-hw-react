import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./cars";

const store = configureStore({
    reducer: carsReducer,
});


export {
    store,
};
