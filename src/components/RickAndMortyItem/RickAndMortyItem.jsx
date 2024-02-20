import css from "./RickAndMortyItem.module.css";
import {useContext} from "react";
import {Context} from "../../hoc";

const RickAndMortyItem = ({item}) => {
    const {id, name, episode, characters} = item;
    const {setCharacters} = useContext(Context);

    const characterId = characters.map(el => el.split("/")[5]);

    const handleClick = () => {
        characterId.map(el => {
            fetch(`https://rickandmortyapi.com/api/character/${el}`)
                .then(data => data.json())
                .then(res => {
                    setCharacters(prev => ([...prev, res.image]));
                });
        });

    };

    return (
        <li className={css.item}
            onClick={handleClick}
        >
            <p>{id}</p>
            <p>{name}</p>
            <p>{episode}</p>
        </li>
    );
};

export default RickAndMortyItem;