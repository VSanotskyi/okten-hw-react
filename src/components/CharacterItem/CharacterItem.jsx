const CharacterItem = ({item}) => {
    return (
        <img src={item.image}
             alt={item.name}
             width={200}
             height={200}
        />
    );
};

export default CharacterItem;