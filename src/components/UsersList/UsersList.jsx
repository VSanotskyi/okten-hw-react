import UserItem from "../UserItem/UserItem";

const UsersList = ({users}) => {
    return (
        <ul>
            {users.map(user => <UserItem key={user.id}
                                         user={user}
            />)}
        </ul>
    );
};

export default UsersList;