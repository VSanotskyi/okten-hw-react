const base_URL = "https://jsonplaceholder.typicode.com";
const endpoint = "/comments";
const LIMIT = "?_limit=20";

const urls = {
    comments: {
        base_URL,
        endpoint,
        endpointWithLimit: endpoint + LIMIT,
    },
};

export {urls};