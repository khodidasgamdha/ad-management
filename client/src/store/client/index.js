import { createSlice } from "@reduxjs/toolkit";
import { updateCurrentClient } from "./clientThunk";

const initialState = {
    clients: [],
    clientId: null,
    loading: false,
};

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers: {
        [updateCurrentClient.pending]: (state) => {
            state.loading = true;
        },
        [updateCurrentClient.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.clientId = payload;
        },
        [updateCurrentClient.rejected]: (state, payload) => {
            state.loading = false;
            state.clientId = null;
        },
    },
});

// The reducer
export const clientReducer = clientSlice.reducer;
