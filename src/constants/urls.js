const baseURL = "https://rickandmortyapi.com/api";
const episodeEndpoint = "/episode";
const charactersEndpoint = "/character";

const urls = {
    episode: {
        base: episodeEndpoint,
    },
    characters: {
        base: charactersEndpoint,
        byId: (id) => `${charactersEndpoint}/${id}`,
    },
};

export {
    baseURL,
    urls,
};