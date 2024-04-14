import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function BaseLayout() {
  return (
    <>
      <div className="text-gray-700 py-5 min-h-screen max-w-screen-xl mx-auto flex flex-col text-sm max-md:text-xs">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />

        <Outlet />
        <Toaster position="top-right" />

        <Footer />
      </div>
    </>
  );
}

export default BaseLayout;
