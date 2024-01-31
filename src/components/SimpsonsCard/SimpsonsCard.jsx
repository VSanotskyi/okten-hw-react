const SimpsonsCard = ({simpson: {name, surname, age, info, photo}}) => {
    return (
        <li>
            <img src={photo}
                 alt={name}
            />
            <p>{name} {surname}</p>
            <p>age: {age}</p>
            <p>{info}</p>
        </li>
    );
};

export default SimpsonsCard;