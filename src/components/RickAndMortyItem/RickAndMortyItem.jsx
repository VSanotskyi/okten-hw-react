import {useContext} from "react";

import {Context} from "../../hoc";
import {charactersServices} from "../../services";
import css from "./RickAndMortyItem.module.css";

const RickAndMortyItem = ({item}) => {
    const {id, name, episode, characters} = item;
    const {setCharacters, setError, setIsLoading} = useContext(Context);

    const handleClick = () => {
        setCharacters([]);
        setIsLoading(true);
        
        const characterId = characters.map(el => el.split("/")[5]);

        characterId.map(async el => {
            try {
                const {data} = await charactersServices.getById(el);
                setCharacters(prev => ([...prev, data.image]));
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        });
    };

    return (
        <div className={css.item}
             onClick={handleClick}
        >
            <p>{id}</p>
            <p>{name}</p>
            <p>{episode}</p>
        </div>
    );
};

export default RickAndMortyItem;

