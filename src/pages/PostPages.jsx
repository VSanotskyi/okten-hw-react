import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

import apiServices from "../services/apiServices";
import List from "../components/List/List";
import PostItem from "../components/PostItem/PostItem";

const PostPages = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getPosts = async () => {
        setIsLoading(true);
        try {
            const res = await apiServices.getPostsByUserId(1);
            setPosts(res);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <Button onClick={() => navigate("/")}><HomeSharpIcon/></Button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {posts && <List items={posts}
                            renderItem={(item) => <PostItem key={item.id}
                                                            item={item}
                            />}
            />
            }
        </div>
    );
};

export default PostPages;