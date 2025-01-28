import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Profile from "./component/Profile";
import { UserProvider } from "./utils/usercontext.jsx";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/api/signup" element={<Signup />} />
      <Route path="/api/login" element={<Signin />} />
        <Route
        element={
          <UserProvider>
            <Outlet />
          </UserProvider>
        }
      ></Route>
        <Route path="/api/signup" element={<Profile />} />
      
    </>
  )
);

export default App;
