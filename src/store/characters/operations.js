import {createAsyncThunk} from "@reduxjs/toolkit";

import {charactersServices} from "../../services";

const getCharactersByEpisode = createAsyncThunk(
    "characters/getByEpisode",
    async (charactersArray, thunkAPI) => {
        try {
            const {data} = await charactersServices.getByArrayId(charactersArray);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export {
    getCharactersByEpisode,
};