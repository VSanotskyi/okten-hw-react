import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserPages from "./pages/UserPages";
import UserDetailPages from "./pages/UserDetailPages";
import PostPages from "./pages/PostPages";
import CommentPages from "./pages/CommentPages";

const App = () => {
    return (
        <Routes>
            <Route path="/"
                   element={<Layout/>}
            >
                <Route index
                       element={<Navigate to="/users"/>}
                />
                <Route path="/users"
                       element={<UserPages/>}
                />
                <Route path="/users/:id"
                       element={<UserDetailPages/>}
                />
                <Route path="/users/:id/posts"
                       element={<PostPages/>}
                />
                <Route path="posts/:id/comments"
                       element={<CommentPages/>}
                />
            </Route>
        </Routes>
    );
};

export default App;