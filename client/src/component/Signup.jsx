import { useState } from "react";
import {useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constant";
import { isValidData } from "../utils/validation";

const Signup = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    socialMediaUrl: "",
  });
  const navigate=useNavigate()
  const [error, setError] = useState(null);
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
        setError(errorList);
        return;
      }
      const response = await fetch(`${BASE_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data)
      navigate("/api/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Register</h1>
      <p>Before we start,please create your account</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">
          username:
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error && <p>{error?.username}</p>}
        <label htmlFor="email">
          email:
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error && <p>{error?.email}</p>}
        <label htmlFor="password">
          password:
          <input
            type="text"
            id="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error && <p>{error?.password}</p>}
        <label htmlFor="contact">
          contact:
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error && <p>{error?.contact}</p>}
        <label htmlFor="socialMediaUrl">
          socialMediaUrl:
          <input
            type="text"
            id="socialMediaUrl"
            value={formData.socialMediaUrl}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit" className="cursor-pointer">Create account</button>
      </form>
    </>
  );
};

export default Signup;
