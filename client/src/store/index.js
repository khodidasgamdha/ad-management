import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./client";

const combinedReducer = combineReducers({
    client: clientReducer,
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});
