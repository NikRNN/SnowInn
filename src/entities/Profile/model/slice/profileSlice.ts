import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema, Profile } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData";

const initialState : ProfileSchema = {
    isLoading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action : PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ProfileActions } = profileSlice;
export const { reducer: ProfileReducer } = profileSlice;
