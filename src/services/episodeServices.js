import {apiServices} from "./apiServices";
import {urls} from "../constants";

const episodeServices = {
    getAll: (page = "1") => apiServices.get(urls.episode.base, {params: {page}}),
};

export {
    episodeServices,
};