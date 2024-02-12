import AlbumItem from "../AlbumItem";

const AlbumsList = ({albums}) => {
    return (
        <div>
            {albums.map(album => <AlbumItem key={album.id}
                                            album={album}
            />)}
        </div>
    );
};

export default AlbumsList;