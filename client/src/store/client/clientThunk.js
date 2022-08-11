import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axios";

export const updateCurrentClient = createAsyncThunk(
    "client/updateCurrentClient",
    async (id, { rejectWithValue }) => {
        try {
            return id;
        } catch (error) {
            return rejectWithValue(
                "Somthing went wrong while updating client."
            );
        }
    }
);

export const getClients = createAsyncThunk(
    "client/getClients",
    async (id, { rejectWithValue }) => {
        try {
            if(typeof id === 'string') {
                const res = await axios.get(`/user/${id}`);
                const {
                    data: {
                        data: {
                            user: {
                                access_info: { clients },
                            },
                        },
                    },
                } = res;
                return clients;
            }
            return id
        } catch (error) {
            return rejectWithValue(
                "Somthing went wrong while updating client."
            );
        }
    }
);
