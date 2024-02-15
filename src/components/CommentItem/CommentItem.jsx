const CommentItem = ({item}) => {
    const {body, name, email} = item;

    return (
        <li>
            <p>body: {body}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <hr/>
        </li>
    );
};

export default CommentItem;