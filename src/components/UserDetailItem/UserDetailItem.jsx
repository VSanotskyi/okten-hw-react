import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const UserDetailItem = ({user}) => {
    const navigate = useNavigate();
    const {id, email, name, phone, username, website} = user;

    const handleClick = () => {
        navigate("posts");
    };

    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>website: {website}</p>
            <Button size="small"
                    onClick={handleClick}
            >post of current user
            </Button>
        </div>
    );
};

export default UserDetailItem;