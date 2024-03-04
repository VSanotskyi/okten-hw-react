import css from "./List.module.css";

const List = ({items, render}) => {
    return (
        <ul className={css.list}>
            {items.map(item => render(item))}
        </ul>
    );
};

export {List};