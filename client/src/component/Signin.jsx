import { useState } from "react";
import { BASE_URL } from "../utils/constant";

const Signin = () => {
  const [form, setForm] = useState({
    emailId: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handlSubmit = async () => {
    try {
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
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handlSubmit}>
        <input
          type="text"
          id="emailId"
          value={form.emailId}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          id="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </>
  );
};

export default Signin;
