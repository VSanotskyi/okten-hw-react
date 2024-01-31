import css from "./List.module.css";

const List = (props) => {
    return (
        <ul className={css.list}>
            {
                props.items.map(
                    item => <li className={css.item}
                                key={item.id}
                    >{props.renderItem(item)}</li>)
            }
        </ul>
    );
};

export default List;