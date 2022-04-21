import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        
    },

    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload.product;
            const counter = action.payload.counter;

            const checkItem = state.cart.find((item) => item.title === product.title);
            if (checkItem) {
                checkItem.counter += counter;
            } else {
                state.cart.push({ ...product, counter });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        incrementProduct: (state, action) => {
            const checkItem = state.cart.find((item) => item.title === action.payload);
            checkItem.counter += 1
            localStorage.setItem("cartItems", JSON.stringify(state.cart));

        },
        decrementProduct: (state, action) => {
            const checkItem = state.cart.find((item) => item.title === action.payload);
            checkItem.counter -= 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));

        },
        deleteProductFromCart: (state, action) => {
            state.cart.map((cartItem) => {
                if (cartItem.productId === action.payload) {
                    state.cart = state.cart.filter(
                        (item) => item.productId !== cartItem.productId
                    );
                }
                return state;
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        deleteAllProducts: (state) => {
            state.cart.length = 0;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
     
    }
});
export const {
    addProductToCart,
    incrementProduct,
    decrementProduct,
    deleteProductFromCart,
    deleteAllProducts,
} = CartSlice.actions;
export default CartSlice.reducer;