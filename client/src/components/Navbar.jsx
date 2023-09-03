import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import menu form heroicons/react
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // const toggleUserDropdown = () => {
  //   setIsUserDropdownOpen(!isUserDropdownOpen);
  // };

  const isLoggedIn = () => {
    // Check if the "token" item exists in local storage to determine the login state
    return localStorage.getItem("token") !== null;
  };
  const handleLogout = () => {
    localStorage.clear();
    // You may want to redirect the user to the login page after logging out
    navigate("/"); // this was missing so it could not redirect
    // Add the logic for redirection here.
  };

  return (
    <nav className="border-gray-200 backdrop-blur-md bg-gray-900/40 fixed w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-9 mr-3"
            alt="ParkMate Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            ParkMate
          </span>
        </Link>
        <div className="flex items-center md:order-2 relative">
          {isLoggedIn() ? (
            <div
              className="mr-2 text-white px-3 py-1 rounded-full font-bold bg-red-500 hover:bg-red-600 cursor-pointer sm:mr-4"
              onClick={handleLogout}
            >
              Logout
            </div>
          ) : (
            <div className="mr-2 text-white px-3 py-1 rounded-full font-bold bg-green-500 hover:bg-green-600 cursor-pointer sm:mr-4">
              <Link to="/login">Login 👋🏼</Link>
            </div>
          )}
          {/* Added relative positioning */}
          {/* <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isUserDropdownOpen}
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={toggleUserDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="../public/user-48.png"
              alt="user photo"
            />
          </button> */}
          {/* Dropdown menu */}
          {/* <div
            style={{ top: "130%", right: "-30%" }} // Position the dropdown below the user logo
            className={`${
              isUserDropdownOpen ? "block" : "hidden"
            } absolute mt-2 mr-3 origin-top-right w-48 rounded-md shadow-lg bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                username
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                username@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              {/* <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li> */}
          {/* <li>
                <Link
                  to="/book"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div> */}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-5 h-5 hover:text-sky-400"/>
            ) : (
              // Conditionally render icon based on the state
              <AiOutlineMenu className="w-5 h-5 hover:text-sky-400" />
            )}
          </button>
        </div>
        {/* nav open */}
        <div
          className={`items-center justify-between ${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-gray-800 md:dark:bg-gray-900/0 border-gray-700">
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="/"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
              >
                Book Parking
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
              >
                About Us
              </Link>
            </li>
          </ul>
          {/* nav close */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
