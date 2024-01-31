import Container from "./components/Container/Container";
import {RickAndMortyCard} from "components";
import {SimpsonsCard} from "components";
import simpsons from "./simpson.json";
import character from "./character.json";

const App = () => {
    return (
        <>
            <Container title="Simpsons">
                <ul>
                    {simpsons.map(el => <SimpsonsCard key={el.name}
                                                      simpson={el}
                    />)}
                </ul>
            </Container>
            <Container title="Rick and Morty">
                <ul>
                    {character.map(el => <RickAndMortyCard key={el.id}
                                                           character={el}
                    />)}
                </ul>
            </Container>
        </>
    );
};

export default App;
