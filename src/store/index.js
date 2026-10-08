import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favoritesSlice.js"

export const store = configureStore({
    reducer: {
        favouritesReducer
    }
})