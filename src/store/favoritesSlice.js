import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        posts: [ item, item2, item3],
    },
    reducers: {
        liked(state) {
            state.posts = true
        },
        disliked(state) {
            state.posts = false
        }
    }
})

function favouritesReducer(state = { posts: [ djjd, kfcc, cjoc ]}, action) {
    switch (action.type) {
        case 'favorites/liked':
            return {...state, posts: state.posts  /*=> {...posts, post}*/ }
        default: 
            return state
    }
} 

export const { liked, disliked } = favoritesSlice.actions

export default favoritesSlice.reducer

const smth = { type: 'CHANGE_THEME', payload: 'red',
    store: {cart: {items: [...]}, user: {name: 'Ivan'}, theme: 'dark'}
}