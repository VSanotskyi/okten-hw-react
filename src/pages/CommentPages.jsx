import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import apiServices from "../services/apiServices";
import List from "../components/List/List";
import CommentItem from "../components/CommentItem/CommentItem";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import {Button} from "@mui/material";

const CommentPages = () => {
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    const getComments = async (id) => {
        setIsLoading(true);
        try {
            const res = await apiServices.getAllCommentsByPostId(id);
            setComments(res);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getComments(id);
    }, [id]);

    return (
        <div>
            <Button onClick={() => navigate("/")}><HomeSharpIcon/></Button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {comments && <List items={comments}
                               renderItem={(item) => <CommentItem key={item.id}
                                                                  item={item}
                               />}
            />}
        </div>
    );
};

export default CommentPages;