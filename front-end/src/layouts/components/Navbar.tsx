import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "dashboard", path: "/" },
    { name: "proposals", path: "/proposals" },
    { name: "validators", path: "/validators" },
  ];

  return (
    <nav className="bg-white p-1 rounded-full bg-opacity-30 mx-auto w-fit my-10 border-white border justify-center">
      <ul className="flex justify-center">
        {navItems.map((item) => (
          <li key={item.name} className="py-2">
            <Link
              to={item.path}
              className={`py-2 px-5 rounded-full transition-all ease-in-out duration-150 hover:bg-white hover:bg-opacity-70 focus:bg-opacity-100 hover:shadow-md hover:font-semibold ${
                location.pathname === item.path &&
                "bg-white shadow-md font-semibold"
              }`}
            >
              <span
                className={`${
                  location.pathname === item.path &&
                  "text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-800"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
