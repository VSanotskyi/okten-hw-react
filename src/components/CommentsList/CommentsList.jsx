import CommentItem from "../CommentItem/CommentItem";

const CommentsList = ({comments}) => {
    return (
        <ul>
            {comments.map(el => <CommentItem key={el.id}
                                             comment={el}
            />)}
        </ul>
    );
};

export default CommentsList;