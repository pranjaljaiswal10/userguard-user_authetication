import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import { UserProvider } from "./utils/usercontext"


const Layout = () => {
  return (
    <>
    <Header/>
    <UserProvider>
    <Outlet/>
    </UserProvider>

    </>
  )
}

export default Layout