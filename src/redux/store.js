import { configureStore } from "@reduxjs/toolkit";
import { customeReducer } from "../redux/Reducers";


const store = configureStore({
    reducer:{
        custom : customeReducer
    },
})

export default store;