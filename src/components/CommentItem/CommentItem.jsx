const CommentItem = ({comment}) => {
    const {postId, name, body} = comment;
    return (
        <li>
            <p>postId: {postId}</p>
            <h3>{name}</h3>
            <p>{body}</p>
            <hr/>
        </li>
    );
};

export default CommentItem;