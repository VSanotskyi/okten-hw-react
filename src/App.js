import {
    Container,
    List,
    RickAndMortyCard,
    SimpsonsCard,
} from "components";

import simpsons from "./data/simpson.json";
import character from "./data/character.json";

const App = () => {
    return (
        <>
            <Container title="Simpsons">
                <List items={simpsons}
                      renderItem={(item) =>
                          <SimpsonsCard item={item}/>
                      }
                />
            </Container>
            <Container title="Rick and Morty">
                <List items={character}
                      renderItem={(item) =>
                          <RickAndMortyCard key={item.id}
                                            item={item}
                          />
                      }
                />
            </Container>
        </>
    );
};

export default App;
