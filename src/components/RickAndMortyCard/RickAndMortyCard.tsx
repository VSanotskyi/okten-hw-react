import {ICharacters} from '../../../types/types';

interface ItemProps {
    item: ICharacters;
}

const RickAndMortyCard = ({item}: ItemProps) => {
    const {name, gender, species, status, image} = item;
    return (
        <li>
            <img src={image}
                 alt={name}
                 style={{display: 'block'}}
            />
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
        </li>
    );
};

export default RickAndMortyCard;