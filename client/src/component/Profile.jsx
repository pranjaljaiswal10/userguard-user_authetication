import { useContext } from "react";
import { UserContext } from "../utils/usercontext";

const Profile = () => {
  const { state } = useContext(UserContext);
  console.log(state);
  const { profilePictureUrl } = state;
  return (
    // <ul>
    //   <li>
    //     <img src={profilePictureUrl} alt="" />
    //   </li>
    //   <li><span></span></li>
    // </ul>
    <></>
  );
};

export default Profile;
