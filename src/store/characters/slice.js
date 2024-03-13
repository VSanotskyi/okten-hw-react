import {createSlice} from "@reduxjs/toolkit";
import {getCharactersByEpisode} from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const charactersSlice = createSlice({
    name: "charactersSlice",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getCharactersByEpisode.fulfilled, (state, {payload}) => {
                state.items = payload;
            });
    },
});

export const charactersReducer = charactersSlice.reducer;