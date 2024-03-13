import {createSlice} from "@reduxjs/toolkit";

import {getAllEpisodes} from "./operations";

const handlePending = (state) => {
    state.error = null;
    state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};

const initialState = {
    items: [],
    pages: 0,
    isLoading: false,
    error: null,
};

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    extraReducers: builder => {
        builder
            // pending
            .addCase(getAllEpisodes.pending, handlePending)
            // fulfilled
            .addCase(getAllEpisodes.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items = payload.results;
                state.pages = payload.info.pages;
            })
            // rejected
            .addCase(getAllEpisodes.rejected, handleRejected);
    },
});

export const episodesReducer = episodesSlice.reducer;