import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./client";
import { campaignReducer } from "./campaign";

const combinedReducer = combineReducers({
    client: clientReducer,
    campaign: campaignReducer,
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});
