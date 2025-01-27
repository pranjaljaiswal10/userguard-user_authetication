import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { isValidData } from "../utils/validation";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      isValidData(form)
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <p>Before we start,please,login into your account</p>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            placeholder="Enter a email..."
            value={form.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            id="password"
            placeholder="Enter a password..."
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit" className="cursor-pointer">
          Log in
        </button>
      </form>
    </>
  );
};

export default Signin;
