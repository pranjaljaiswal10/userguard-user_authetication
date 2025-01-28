import { useContext } from "react"
import { UserContext } from "../../../Backend/src/utils/userContext"

const PrivateRoute = () => {
  const {state}=useContext(UserContext)

}

export default PrivateRoute