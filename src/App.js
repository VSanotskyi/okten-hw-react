import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import TodosPage from "./pages/TodosPage/TodosPage";
import MainPage from "./pages/MainPage/MainPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import PostsPage from "./pages/PostsPage/PostsPage";

const App = () => {
    return (
        <Routes>
            <Route path=""
                   element={<Layout/>}
            >
                <Route index
                       element={<MainPage/>}
                />
                <Route path="/todos"
                       element={<TodosPage/>}
                />
                <Route path="/albums"
                       element={<AlbumsPage/>}
                />
                <Route path="/comments"
                       element={<CommentsPage/>}
                />
                <Route path="/posts"
                       element={<PostsPage/>}
                />
            </Route>
        </Routes>
    );
};

export default App;
