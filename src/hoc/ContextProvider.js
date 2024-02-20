import {createContext, useState} from "react";

export const Context = createContext(null);

const ContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [characters, setCharacters] = useState([]);

    const valueContext = {
        isLoading,
        setIsLoading,
        error,
        setError,
        characters,
        setCharacters,
    };

    return (
        <Context.Provider value={valueContext}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;