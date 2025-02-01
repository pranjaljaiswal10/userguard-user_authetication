import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Profile from "./component/Profile";
import PrivateRoute from "./component/PrivateRoute.jsx";
import Layout from "./Layout.jsx";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
           </PrivateRoute>
        ),
      },
    ],
  },
]);

export default App;
