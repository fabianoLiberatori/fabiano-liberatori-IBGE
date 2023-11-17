import { Outlet } from "react-router-dom";
import Header from "./Header";


function Layout() {
  return(
    <>
    <Header />
    <h1>layout</h1>
    <Outlet />
    </>
  )
}

export default Layout;
