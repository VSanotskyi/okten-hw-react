import {useEffect, useState} from "react";
import {getAllComments} from "../../services/apiServices";
import CommentsList from "../../components/Comments/CommentsList/CommentsList";

const CommentsPage = () => {
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGetComments = async () => {
        try {
            const res = await getAllComments();
            setComments(res);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGetComments();
    }, []);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {comments && <CommentsList comments={comments}/>}
        </div>
    );
};

export default CommentsPage;