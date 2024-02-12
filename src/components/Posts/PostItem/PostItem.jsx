const PostItem = ({post}) => {
    const {title, body} = post;
    return (
        <div>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostItem;