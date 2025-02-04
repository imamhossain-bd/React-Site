import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/navBar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;