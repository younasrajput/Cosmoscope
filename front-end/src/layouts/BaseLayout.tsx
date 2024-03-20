import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

        <Footer />
      </div>
    </>
  );
}

// OPTIONS TO EXPLORE
// background-color: rgb(34, 197, 94);
// background-image: radial-gradient(at 65% 1%, rgb(217, 249, 157) 0, transparent 69%), radial-gradient(at 77% 98%, rgb(125, 211, 252) 0, transparent 1%), radial-gradient(at 97% 35%, rgb(241, 245, 249) 0, transparent 88%), radial-gradient(at 86% 31%, rgb(75, 85, 99) 0, transparent 53%), radial-gradient(at 20% 68%, rgb(5, 150, 105) 0, transparent 76%), radial-gradient(at 22% 42%, rgb(63, 63, 70) 0, transparent 92%);

// background-color: rgb(229, 229, 229);
// background-image: radial-gradient(at 1% 84%, rgb(209, 250, 229) 0, transparent 94%), radial-gradient(at 91% 16%, rgb(236, 72, 153) 0, transparent 82%), radial-gradient(at 95% 97%, rgb(139, 92, 246) 0, transparent 19%), radial-gradient(at 12% 74%, rgb(136, 19, 55) 0, transparent 16%), radial-gradient(at 51% 52%, rgb(254, 240, 138) 0, transparent 83%), radial-gradient(at 58% 6%, rgb(103, 232, 249) 0, transparent 41%);

// background-color: rgb(153, 27, 27);
// background-image: radial-gradient(at 71% 93%, rgb(254, 243, 199) 0, transparent 37%), radial-gradient(at 47% 2%, rgb(254, 205, 211) 0, transparent 58%), radial-gradient(at 23% 87%, rgb(254, 226, 226) 0, transparent 64%), radial-gradient(at 12% 77%, rgb(30, 41, 59) 0, transparent 96%), radial-gradient(at 6% 40%, rgb(113, 63, 18) 0, transparent 19%), radial-gradient(at 28% 19%, rgb(203, 213, 225) 0, transparent 100%);

export default BaseLayout;
