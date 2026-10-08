import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: [
            { id: 1, name: "Hat" },
            { id: 2, name: "T-shirt" },
            { id: 3, name: "Shoes" }
        ]
    },
    reducers: {
        toggleFavorite(state, action) {
            const newItems = state.items.filter(
                item => item.id !== action.payload.id
            );

            if (newItems.length === state.items.length) {
                state.items.push(action.payload);
            } else {
                state.items = newItems;
            }
        }
    }
})

export const { value, items, liked } = favoritesSlice.actions

export const selectFavoritesCount = (state) => state.favouritesReducer.items.length

export default favoritesSlice.reducer