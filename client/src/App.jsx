import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/api/signup" element={<Signup />} />
      <Route path="/api/login" element={<Signin />} />
    </>
  )
);

export default App;
