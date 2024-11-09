import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import SocialShareComp from "./Components/SocialShareComp";
import NavbarComp from "./Components/NavbarComp";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
        <NavbarComp />
      <Outlet />
      <SocialShareComp />
      <Footer />
    </div>
  );
};

export default Layout;
