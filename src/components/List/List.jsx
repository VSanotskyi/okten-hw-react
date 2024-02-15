import css from "./List.module.css";

const List = ({items, renderItem}) => {
    return (
        <ul className={css.list}>
            {items.map(renderItem)}
        </ul>
    );
};

export default List;