import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, ProductInCart, MainStateType } from '@/types';


const initialState: MainStateType = {
    cart: [],
    favorites: [],
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductInCart>) => {
            state.cart = [...state.cart, action.payload];
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item: ProductInCart) => {
                return item.product.id !== action.payload
            });
        },
        addToFavorites: (state, action: PayloadAction<ProductType>) => {
            state.favorites = [...state.favorites, action.payload];
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((product: ProductType) => {
                return product.id !== action.payload
            });
        },
    },
})

const { actions, reducer } = mainSlice;
export default reducer;
export const {
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
} = actions;