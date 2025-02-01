import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Header = () => {
  const navigate=useNavigate()
  const handleClick=async()=>{
  try {
    const response=await fetch(`${BASE_URL}/api/logout`,{
      method:"POST"
    })
    const data=await response.json()
    console.log(data)
  navigate("/login")
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <header>
      <h1>Userguard</h1>
      <ul>
        <Link to="/signup">
          <li>Signup</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <li onClick={(e)=>handleClick(e)} className="cursor-pointer">logout</li>
      </ul>
    </header>
  );
};

export default Header;
