import {useEffect, useState} from "react";

import UserForm from "./UserForm/UserForm";
import UsersList from "./UsersList/UsersList";
import userApi from "../services/userApi";

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const res = await userApi.getAll();
        setUsers(res);
    };

    return (
        <div>
            <UserForm/>
            {users && <UsersList users={users}/>}
        </div>
    );
};

export default UsersPage;