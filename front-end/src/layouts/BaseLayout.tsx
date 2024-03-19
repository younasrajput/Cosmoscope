import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function BaseLayout() {
  return (
    <>
      <div className="flex">
        {/* left - side bar */}
        <div className="w-1/6">
          <Navbar />
        </div>

        {/* right - content & footer */}
        <div className="w-5/6 ml-auto">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default BaseLayout;
