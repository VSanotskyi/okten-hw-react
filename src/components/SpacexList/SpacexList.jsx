import {useEffect, useState} from "react";

import {getSpacexApi} from "../../services/spacexApi";
import SpacexItem from "../SpacexItem/SpacexItem";
import css from "./SpacexList.module.css";

const SpacexList = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        const data = await getSpacexApi();
        setList(filterArray(data));
    };

    console.log(list);

    return (
        <ul className={css.list}>
            {
                list && list.map(item => <SpacexItem key={item.flight_number}
                                                     item={item}
                />)
            }
        </ul>
    );
};

export default SpacexList;

const filterArray = (array) => {
    return array.filter(item => item.launch_year !== "2020");
};