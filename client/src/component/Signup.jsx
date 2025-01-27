import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { isValidData } from "../utils/validation";

const Signup = () => {
  const [form, setForm] = useState({
    username:"",
    email: "",
    password: "",
  });
  const [error,setError]=useState(null)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
        const errorList=isValidData(form);
        if(errorList){   
          setError(errorList)
          return
        }
        const response = await fetch(`${BASE_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Register</h1>
      <p>Before we start,please create your account</p>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={form.username}
            id="username"
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error && (<p>{error?.username}</p>)}
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={form.email}
            id="email"
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error && (<p>{error?.emailid}</p>)}
        <label htmlFor="password">
          Password:
          <input
            type="text"
            value={form.password}
            id="password"
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error &&(<p>{error?.password}</p>)}
        <button type="submit">Create account</button>
      </form>
    </>
  );
};

export default Signup;
