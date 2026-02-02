import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema, Profile } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState : ProfileSchema = {
    isLoading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.dataForm = state.data;
            state.validateError = undefined;
        },
        updateProfileForm: (state, action: PayloadAction<Profile>) => {
            state.dataForm = {
                ...state.dataForm,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action : PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.dataForm = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.validateError = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action : PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.dataForm = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateError = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ProfileActions } = profileSlice;
export const { reducer: ProfileReducer } = profileSlice;
