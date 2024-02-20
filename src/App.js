import {RouterProvider} from "react-router-dom";

import ContextProvider from "./hoc/ContextProvider";
import {router} from "./router";

const App = () => {
    return (
        <ContextProvider>
            <RouterProvider router={router}/>
        </ContextProvider>
    );
};

export default App;
