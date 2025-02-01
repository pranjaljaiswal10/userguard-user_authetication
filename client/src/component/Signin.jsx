import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { isValidData } from "../utils/validation";
import { useContext } from "react";
import { UserContext } from "../utils/usercontext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const {dispatch} = useContext(UserContext);
  const location=useLocation()
  const navigate=useNavigate();
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errorList = isValidData(formData);
      if (errorList) {
        setErrorMessage(errorList);
        return;
      }
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json =await response.json();
      console.log(json)
      dispatch({ type: "LOGIN", payload: json });
      navigate(location?.state?.from?.pathname || "/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <p>Before we start,please,login into your account</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            placeholder="Enter a email..."
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {errorMessage && <p>{errorMessage?.email}</p>}
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Enter a password..."
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {errorMessage && <p>{errorMessage?.password}</p>}
        <button type="submit" className="cursor-pointer">
          Log in
        </button>
      </form>
    </>
  );
};

export default Signin;
