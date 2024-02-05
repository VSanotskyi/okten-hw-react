import {useState} from "react";
import {getPostById} from "../../services/postsApi/postsApi";

const PostItem = ({post: {id, title}}) => {
    const [post, setPost] = useState(null);
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(prev => !prev);
        !isShow && getPostInfo(id);
    };

    const getPostInfo = async (id) => {
        const data = await getPostById(id);
        setPost(data);
    };

    return (
        <div style={{
            border: "1px solid black",
            marginBottom: "5px",
            padding: "10px",
            borderRadius: "5px",
        }}
        >
            <p>{title}</p>
            {
                isShow && post &&
                <div>
                    <p>id: {post.id}</p>
                    <p>userId: {post.userId}</p>
                    <p>{post.body}</p>
                </div>}
            <button onClick={handleClick}>{isShow ? "Hide" : "Show"}</button>
        </div>
    );
};

export default PostItem;