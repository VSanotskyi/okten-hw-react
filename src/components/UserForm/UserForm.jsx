import {useState} from "react";

import {postUserApi} from "../../services/usersApi";
import css from "./UserForm.module.css";

const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
};

const UserForm = () => {
    const [user, setUser] = useState(initialState);
    const [isCreate, setIsCreate] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = ({target: {value, name}}) => {
        setUser(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
        setUser(initialState);
    };

    const createUser = async () => {
        const result = await postUserApi(user);
        if (result) {
            setIsCreate(true);
            setTimeout(() => {
                setIsCreate(false);
            }, 2000);
        }

        if (!result) {
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    };

    return (
        <div className={css.wrapper}>
            {isCreate && <p className={css.success}>Created user</p>}
            {isError && <p className={css.error}>Error</p>}
            <form className={css.form}
                  onSubmit={handleSubmit}
            >
                <h2 className={css.title}>Create new user</h2>
                <label className={css.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className={css.label}>
                    UserName
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className={css.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className={css.label}>
                    Phone
                    <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className={css.btn}
                        type="submit"
                >Add user
                </button>
            </form>
        </div>
    );
};

export default UserForm;