import { useContext } from "react";
import { UserContext } from "../utils/usercontext.jsx";

const Profile = () => {
   const {state}=useContext(UserContext)
 const {username,email,profilePictureUrl,socialMediaUrl}=state.data
  return (
    <div>
      <img src={profilePictureUrl} alt={username} />
      <h1>username:{username}</h1>
      <h2>email:{email}</h2>
      <a href={socialMediaUrl} target="_blank" >twitter</a>
    </div>
  );
};

export default Profile;
