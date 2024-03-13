import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    getAllEpisodes,
    selectEpisodesItems,
    selectEpisodesPages,
    selectEpisodesIsLoading,
    selectEpisodesError,
} from "../store/episodes";
import {CharacterItem, List, RickAndMortyItem} from "../components";
import {selectCharactersItems} from "../store/characters";
import Loading from "../components/Loading/Loading";
import css from "./MainPages.module.css";

const MainPages = () => {
    const [page, setPage] = useState(1);
    const episodesItems = useSelector(selectEpisodesItems);
    const charactersItems = useSelector(selectCharactersItems);
    const maxPage = useSelector(selectEpisodesPages);
    const isLoadingEpisode = useSelector(selectEpisodesIsLoading);
    const error = useSelector(selectEpisodesError);
    const dispatch = useDispatch();

    const handleNextPage = () => {
        setPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        setPage(prev => prev - 1);
    };

    useEffect(() => {
        dispatch(getAllEpisodes(page));
    }, [page, dispatch]);

    return (
        <div>
            {isLoadingEpisode && <Loading/>}
            {error && <h2>{error}</h2>}
            {episodesItems.length > 0 && <>
                <List items={episodesItems}
                      renderItem={(item) => <RickAndMortyItem item={item}/>
                      }
                      title={"Rick and Morty"}
                />
                <div className={css.wrapper}>
                    <button className={css.btn}
                            disabled={page === 1}
                            onClick={handlePrevPage}
                    >Prev
                    </button>
                    <button className={css.btn}
                            disabled={page === maxPage}
                            onClick={handleNextPage}
                    >Next
                    </button>
                </div>
            </>}
            {charactersItems.length > 0 && <List items={charactersItems}
                                                 renderItem={(item) => <CharacterItem item={item}/>}
                                                 title={"Rick and Morty characters"}
            />}
        </div>
    );
};

export default MainPages;