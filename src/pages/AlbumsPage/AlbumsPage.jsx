import {useEffect, useState} from "react";
import {getAllAlbums} from "../../services/apiServices";
import AlbumsList from "../../components/Albums/AlbumsList/AlbumsList";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGetAlbums = async () => {
        setIsLoading(true);
        try {
            const res = await getAllAlbums();
            setAlbums(res);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGetAlbums();
    }, []);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {albums && <AlbumsList albums={albums}/>}
        </div>
    );
};

export default AlbumsPage;