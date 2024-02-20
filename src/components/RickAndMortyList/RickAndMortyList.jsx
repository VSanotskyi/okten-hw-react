import RickAndMortyItem from "../RickAndMortyItem/RickAndMortyItem";

import css from "./RickAndMortyList.module.css";

const RickAndMortyList = ({items}) => {
    return (
        <ul className={css.list}>
            {items.map(item => <RickAndMortyItem key={item.id}
                                                 item={item}
            />)}
        </ul>
    );
};

export default RickAndMortyList;