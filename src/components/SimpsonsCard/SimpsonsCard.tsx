import {ISimpsons} from '../../../types/types';

interface ItemProps {
    item: ISimpsons;
}

const SimpsonsCard = ({item}: ItemProps) => {
    const {name, info, age, surname, photo} = item;


    return (
        <li>
            <img src={photo}
                 alt={name}
                 style={{display: 'block', width: 300, height: 400}}
            />
            <p>{name} {surname}</p>
            <p>age: {age}</p>
            <p>{info}</p>
        </li>
    );
};

export default SimpsonsCard;