import {useCallback, useContext, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Context} from "../hoc";
import {episodeServices} from "../services";
import RickAndMortyList from "../components/RickAndMortyList/RickAndMortyList";
import css from "./MainPages.module.css";
import List from "../components/List/List";
import CharacterItem from "../components/CharacterItem/CharacterItem";

const MainPages = () => {
    const [query, setQuery] = useSearchParams({page: "1"});
    const [items, setItems] = useState(null);
    const [pages, setPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(+query.get("page") || 1);
    const {error, setError, isLoading, setIsLoading, characters} = useContext(Context);

    const getAllEpisodes = async (currentPage) => {
        setIsLoading(true);
        setQuery({page: `${currentPage}`});
        try {
            const {data} = await episodeServices.getAll(query.get("page"));
            setItems(data.results);
            setPages(data.info.pages);
            setError(false);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const nextPage = () => {
        setCurrentPage(prev => prev + 1);
    };

    const prevPage = () => {
        setCurrentPage(prev => prev - 1);
    };

    useEffect(() => {
        getAllEpisodes(currentPage);
    }, [query.get("page"), currentPage]);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {items && <>
                <RickAndMortyList items={items}/>
                <div className={css.wrapper}>
                    <button className={css.btn}
                            disabled={currentPage === 1}
                            onClick={prevPage}
                    >Prev
                    </button>
                    <button className={css.btn}
                            disabled={currentPage === pages}
                            onClick={nextPage}
                    >Next
                    </button>
                </div>
            </>}
            {characters && <List items={characters}
                                 renderItem={(item) => <CharacterItem item={item}/>}
            />}
        </div>
    );
};

export default MainPages;