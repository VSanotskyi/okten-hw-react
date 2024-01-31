const RickAndMortyCard = ({
                              item: {
                                  name,
                                  status,
                                  species,
                                  gender,
                                  image,
                              },
                          }) => {
    return (
        <>
            <img src={image}
                 alt={name}
                 style={{display: "block"}}
            />
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
        </>
    );
};

export default RickAndMortyCard;