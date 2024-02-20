import css from "./List.module.css";

const List = ({items, renderItem, title}) => {
    return (
        <>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {
                    items.map(item => {
                        const itemKey = typeof item === "string" ? item : item.id;
                        return <li key={itemKey}>{renderItem(item)}</li>;
                    })
                }
            </ul>
        </>
    );
};

export default List;