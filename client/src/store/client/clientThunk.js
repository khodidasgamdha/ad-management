import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCurrentClient = createAsyncThunk(
    "client/updateCurrentClient",
    async (id, { rejectWithValue }) => {
        try {
            return id;
        } catch (error) {
            return rejectWithValue("Somthing went wrong while updating client.");
        }
    }
);
