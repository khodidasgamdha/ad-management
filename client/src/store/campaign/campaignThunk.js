import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCampaignFbObjective = createAsyncThunk(
    "client/updateCampaignFbObjective",
    async (type, { rejectWithValue }) => {
        try {
            return type;
        } catch (error) {
            return rejectWithValue(
                "Somthing went wrong while updating client."
            );
        }
    }
);
