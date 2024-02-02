import {Container, List, RickAndMortyCard, SimpsonsCard} from './components';
import {ICharacters, ISimpsons} from '../types/types';

import characters from './data/character.json';
import simpsons from './data/simpson.json';

const App = () => {
    return (
        <>
            <Container title="Rick and Morty">
                <List items={characters}
                      renderItem={(item: ICharacters) =>
                          <RickAndMortyCard item={item}
                                            key={item.id}
                          />}
                />
            </Container>
            <Container title="Simpsons">
                <List items={simpsons}
                      renderItem={(item: ISimpsons) =>
                          <SimpsonsCard item={item}
                                        key={item.id}
                          />}
                />
            </Container>
        </>
    );
};

export default App;