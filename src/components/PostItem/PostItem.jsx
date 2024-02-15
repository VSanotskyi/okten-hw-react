import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const PostItem = ({item}) => {
    const {body, title, id} = item;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/${id}/comments`);
    };

    return (
        <li>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button onClick={handleClick}
                    size="small"
            >Show comments</Button>
        </li>
    );
};

export default PostItem;