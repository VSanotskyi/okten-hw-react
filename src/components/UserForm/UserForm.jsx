import {useForm} from "react-hook-form";
import userApi from "../../services/userApi";

const UserForm = () => {
    const {reset, register, handleSubmit} = useForm();

    const addUser = async (user) => {
        const res = await userApi.add(user);
        if (!res) alert("Error");
        if (res) alert("Success");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <label>
                Name
                <input type="text"
                       placeholder="Jon"
                       {...register("name")}
                       required
                />
            </label>
            <label>
                Email
                <input type="email"
                       placeholder="jon@gmail.com"
                       {...register("email")}
                       required
                />
            </label>
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;