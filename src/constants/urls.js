export const baseUrl = "https://jsonplaceholder.typicode.com";

const posts = "/posts";

export const urls = {
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`,
    },
};
