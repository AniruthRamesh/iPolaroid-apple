import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authReducer',
    initialState:{
        user: null,
        loading: false,
        error: null,
    },

    reducers:{
        login: (state,action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    }

});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;