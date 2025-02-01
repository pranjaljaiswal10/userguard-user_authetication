import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl">Welcome to Userguad</h1>
      <p>
        Please go to <Link to="/signup">/api/signup</Link> for signup page
      </p>
      <p>
        Please go to<Link to="/login">/api/signin</Link> for login page
      </p>
    </>
  );
};

export default Home;
