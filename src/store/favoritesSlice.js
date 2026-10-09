import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: [
            { id: 1, name: "Hat", isLiked: false },
            { id: 2, name: "T-shirt", isLiked: false },
            { id: 3, name: "Shoes", isLiked: false }
        ]
    },
    reducers: {
        toggleFavorite(state, action) {
            const item = state.items.find(
                item => item.id === action.payload.id
            );

            if (item) {
                item.isLiked = !item.isLiked;
            }
        }
    }
})

export const { items, toggleFavorite } = favoritesSlice.actions

export const selectFavoritesCount = (state) => state.favouritesReducer.items.length

export default favoritesSlice.reducer