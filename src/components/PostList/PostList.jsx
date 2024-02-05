import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/postsApi/postsApi";
import PostItem from "../PostItem/PostItem";

const PostList = () => {
    const [postList, setPostList] = useState(null);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const data = await getAllPosts();
        setPostList(data);
    };

    return (
        <div>
            {
                postList && postList.map(item => (
                    <PostItem key={item.id}
                              post={item}
                    />
                ))
            }
        </div>
    );
};

export default PostList;