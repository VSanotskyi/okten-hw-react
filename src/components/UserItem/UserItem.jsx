const UserItem = ({user}) => {
    const {id, name, email} = user;

    return (
        <li>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <hr/>
        </li>
    );
};

export default UserItem;