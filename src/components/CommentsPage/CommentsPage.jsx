import {useEffect, useState} from "react";
import CommentsList from "../CommentsList/CommentsList";
import {getAll} from "../../services/commentsApi";
import {Form} from "react-hook-form";
import CommentForm from "../CommentForm/CommentForm";

const CommentsPage = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getAllComments();
    }, []);

    const getAllComments = async () => {
        const res = await getAll();
        setComments(res);
    };

    return (
        <div>
            <CommentForm/>
            {comments && <CommentsList comments={comments}/>}
        </div>
    );
};

export default CommentsPage;