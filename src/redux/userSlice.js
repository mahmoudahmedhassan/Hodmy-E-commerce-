import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
        isLogin:false,

    },

    reducers: {
        addUser :(state, action)=>{
            state.user =action.payload;
            state.isLogin = true;
            localStorage.setItem("user", JSON.stringify(state.user));
        }
    }
});
export const {addUser} = userSlice.actions;
export default userSlice.reducer;