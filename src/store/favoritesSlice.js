import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        value: '🤍',
        items: ['Hat', 'T-shirt', 'Shoes']
    },
    reducers: {
        liked(state) {
            state.value = '❤️'
        }
    }
})

export const { value, items, liked } = favoritesSlice.actions

export const selectFavoritesCount = (state) => state.favouritesReducer.items.length

export default favoritesSlice.reducer