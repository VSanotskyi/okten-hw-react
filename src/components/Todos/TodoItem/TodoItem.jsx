import {useState} from "react";

const TodoItem = ({todo}) => {
    const {completed, title, id} = todo;
    const [isCompleted, setIsCompleted] = useState(completed);
    const handleChange = () => {
        setIsCompleted(prev => !prev);
    };
    return (
        <li style={{
            display: "flex", gap: "5px", borderBottom: "1px solid black",
        }}
        >
            <p>{id}</p>
            <input type="checkbox"
                   checked={isCompleted}
                   onChange={handleChange}
            />
            <p>{title}</p>
        </li>
    );
};

export default TodoItem;