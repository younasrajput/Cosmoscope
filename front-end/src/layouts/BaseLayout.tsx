import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

function BaseLayout() {
  return (
    <>
      <div className="font-poppins text-gray-700 py-5 min-h-screen max-w-screen-xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />

        <Outlet />
      </div>
    </>
  );
}

export default BaseLayout;