const AlbumItem = ({album}) => {
    const {id, title} = album;
    return (
        <li style={{display: "flex", listStyle: "none"}}>
            <p>{id}.</p>
            <p>{title}</p>
        </li>
    );
};

export default AlbumItem;