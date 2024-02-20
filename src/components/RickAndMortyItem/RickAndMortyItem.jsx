import {useContext} from "react";

import {Context} from "../../hoc";
import css from "./RickAndMortyItem.module.css";

const RickAndMortyItem = ({item}) => {
    const {id, name, episode, characters} = item;
    const {setCharacters} = useContext(Context);

    const characterId = characters.map(el => el.split("/")[5]);

    const handleClick = () => {
        setCharacters([]);
        characterId.map(el => {
            fetch(`https://rickandmortyapi.com/api/character/${el}`)
                .then(data => data.json())
                .then(res => {
                    setCharacters(prev => ([...prev, res.image]));
                })
                .catch(console.log);
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