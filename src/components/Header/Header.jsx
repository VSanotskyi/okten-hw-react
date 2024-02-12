import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <ul style={{
            display: "flex",
            gap: "10px",
            listStyle: "none",
        }}
        >
            <li>
                <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
                <NavLink to="/albums">Albums</NavLink>
            </li>
            <li>
                <NavLink to="/comments">Comments</NavLink>
            </li>
        </ul>
    );
};

export default Header;