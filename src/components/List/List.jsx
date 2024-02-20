import css from "./List.module.css";

const List = ({items, renderItem, title}) => {
    return (
        <>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {
                    items.map(item => <li key={item}>{renderItem(item)}</li>)
                }
            </ul>
        </>
    );
};

export default List;