import { createSlice } from "@reduxjs/toolkit";
import { updateCampaignFbObjective } from "./campaignThunk";

const initialState = {
    campaignFacebookObjective: null,
    loading: false,
};

export const campaignSlice = createSlice({
    name: "campaign",
    initialState,
    reducers: {},
    extraReducers: {
        [updateCampaignFbObjective.pending]: (state) => {
            state.loading = true;
        },
        [updateCampaignFbObjective.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.campaignFacebookObjective = payload;
        },
        [updateCampaignFbObjective.rejected]: (state, payload) => {
            state.loading = false;
            state.clientId = null;
        },
    },
});

// The reducer
export const campaignReducer = campaignSlice.reducer;
