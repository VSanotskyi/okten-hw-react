const List = ({items, renderItem}) => {
    return (
        <ul>
            {
                items.map(item => <li key={item}>{renderItem(item)}</li>)
            }
        </ul>
    );
};

export default List;