export const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

const CARS_ENDPOINT = "/cars";

export const carsUrl = {
    base: CARS_ENDPOINT,
    byId: (id) => `${CARS_ENDPOINT}/${id}`,
};