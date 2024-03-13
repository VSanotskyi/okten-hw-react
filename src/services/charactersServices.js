import {apiServices} from "./apiServices";
import {urls} from "../constants";

const charactersServices = {
    getByArrayId: (id) => apiServices.get(urls.characters.byId(id)),
};

export {
    charactersServices,
};