import {ReactNode} from 'react';

// @ts-ignore
import css from './List.module.css';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

function List<T>({items, renderItem}: ListProps<T>) {
    return (
        <ul className={css.list}>
            {
                items.map(item => renderItem(item))
            }
        </ul>
    );
}

export default List;