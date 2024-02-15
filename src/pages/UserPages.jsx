import {useEffect, useState} from "react";

import apiServices from "../services/apiServices";
import List from "../components/List/List";
import UserItem from "../components/Users/UserItem";

const UserPages = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        setIsLoading(true);
        try {
            const res = await apiServices.getAllUsers();
            setUsers(res);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {users && (
                <List items={users}
                      renderItem={(item) => <UserItem key={item.id}
                                                      item={item}
                      />}
                />
            )}
        </div>
    );
};

export default UserPages;