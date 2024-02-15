import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import apiServices from "../services/apiServices";
import UserDetailItem from "../components/UserDetailItem/UserDetailItem";

const UserDetailPages = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const {state} = useLocation();

    const getUserDetail = async () => {
        setIsLoading(true);
        try {
            const res = await apiServices.getUserById(id);
            setUser(res);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        navigate("/users");
    };

    useEffect(() => {
        if (state?.user) {
            setUser(state.user);
        } else {
            getUserDetail();
        }
    }, [id]);


    return (
        <div>
            <Button size="small"
                    onClick={handleClick}
            > <ArrowBackIcon/>Users</Button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {user && <UserDetailItem user={user}/>}
        </div>
    );
};

export default UserDetailPages;