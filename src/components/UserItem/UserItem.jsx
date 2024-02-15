import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const UserItem = ({item}) => {
    const {id, name} = item;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(id.toString(), {state: {user: item}});
    };

    return (
        <li>
            <p>{id}. {name}</p>
            <Button onClick={handleClick}>Show detail</Button>
        </li>
    );
};

export default UserItem;