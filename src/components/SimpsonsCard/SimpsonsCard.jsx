const SimpsonsCard = ({item: {name, surname, age, info, photo}}) => {
    return (
        <>
            <img src={photo}
                 alt={name}
                 style={{display: "block", width: 300, height: 400}}
            />
            <p>{name} {surname}</p>
            <p>age: {age}</p>
            <p>{info}</p>
        </>
    );
};

export default SimpsonsCard;