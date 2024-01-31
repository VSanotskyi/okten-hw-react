const RickAndMortyCard = ({
                              character: {
                                  name,
                                  status,
                                  species,
                                  gender,
                                  image,
                              },
                          }) => {
    return (
        <li>
            <img src={image}
                 alt={name}
            />
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
        </li>
    );
};

export default RickAndMortyCard;