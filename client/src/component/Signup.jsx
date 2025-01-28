import { useContext, useState } from "react";
import { BASE_URL, userDataList } from "../utils/constant";
import { isValidData } from "../utils/validation";


const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    socialMediaUrl: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errorList = isValidData(form);
      if (errorList) {
        setError(errorList);
        return;
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
      <form onSubmit={(e) => handleSubmit(e)}>
        {userDataList.map((item, index) => (
          <div key={index}>
            <label htmlFor={item.field}>
              {item.field}
              <input
                type="text"
                id={item.field}
                value={form[item.field]}
                placeholder={item.placeholder}
                onChange={(e) => handleChange(e)}
              />
            </label>
            {error["field"] && <p>{error?.item?.field}</p>}
          </div>
        ))}
        <button type="submit">Create account</button>
      </form>
    </>
  );
};

export default Signup;
