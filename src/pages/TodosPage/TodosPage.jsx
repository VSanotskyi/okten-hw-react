import {useEffect, useState} from "react";
import {getAllTodos} from "../../services/apiServices";
import TodosList from "../../components/Todos/TodosList/TodosList";

const TodosPage = () => {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGetTodos = async () => {
        setIsLoading(true);
        try {
            const res = await getAllTodos();
            setTodos(res);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGetTodos();
    }, []);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {todos && <TodosList todos={todos}/>}
        </div>
    );
};

export default TodosPage;