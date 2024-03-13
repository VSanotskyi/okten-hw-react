import {createAsyncThunk} from "@reduxjs/toolkit";

import {episodeServices} from "../../services";

const getAllEpisodes = createAsyncThunk(
    "episodes/getAll",
    async (page, thunkAPI) => {
        try {
            const {data} = await episodeServices.getAll(page);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);


export {
    getAllEpisodes,
};