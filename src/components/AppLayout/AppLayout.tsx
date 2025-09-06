import { Outlet } from "react-router";
import Footer from "../Footer";
import Nav from '../Navbar'
const Layout = () => {
    return (
        <div>
        <Nav/>
        <Outlet />
        <Footer />
        </div>
    )
}

export default Layout