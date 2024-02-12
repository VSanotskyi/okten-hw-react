import {Link, useLocation, useNavigate} from "react-router-dom";

const CommentItem = ({comment}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {postId, name, email, body} = comment;

    const handleClick = () => {
        navigate("/posts", {state: {id: postId, location}});
    };

    return (
        <li>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
            <button onClick={handleClick}>Show Post</button>
        </li>
    );
};

export default CommentItem;