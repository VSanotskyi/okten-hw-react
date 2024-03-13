import css from "./RickAndMortyItem.module.css";
import {useDispatch} from "react-redux";
import {getCharactersByEpisode} from "../../store/characters";

const RickAndMortyItem = ({item}) => {
    const {id, name, episode, characters} = item;
    const dispatch = useDispatch();


    const charactersId = characters.map(el => Number(el.split("/")[el.split("/").length - 1]));

    const handleClick = () => {
        console.log(charactersId);
        dispatch(getCharactersByEpisode(charactersId));
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

