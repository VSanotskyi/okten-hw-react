import {configureStore} from "@reduxjs/toolkit";

import {episodesReducer} from "./episodes";
import {charactersReducer} from "./characters";

export const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer,
    },
});