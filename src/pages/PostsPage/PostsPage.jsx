import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getPostById} from "../../services/apiServices";
import PostItem from "../../components/Posts/PostItem/PostItem";

const PostsPage = () => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {state: {id, location}} = useLocation();

    useEffect(() => {
        handleGetPost();
    }, []);

    const handleClick = () => {
        navigate(location);
    };

    const handleGetPost = async () => {
        setIsLoading(true);
        try {
            const res = await getPostById(id);
            setPost(res);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <button onClick={handleClick}>go back</button>
            {post && <PostItem post={post}/>}
        </div>
    );
};

export default PostsPage;