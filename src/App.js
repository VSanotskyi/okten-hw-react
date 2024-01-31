import {RickAndMortyCard} from "components";
import character from "./character.json";

const App = () => {
    return (
        <div>
            {character.map(el => <RickAndMortyCard key={el.id}
                                                   character={el}
            />)}
        </div>
    );
};

export default App;
