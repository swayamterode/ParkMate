import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import axios from "axios";
import logo from "../assets/mainLogo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      try {
        const response = await axios.get(
          "https://parkmatebackend.onrender.com/user-data",
          config
        );
        if (response.data.data == "token expired") {
          window.location.href = "/login";
          localStorage.clear();
        }
        setUser(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <nav className="border-gray-200 backdrop-blur-md bg-gray-900/40 fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="h-9 lg:h-12"
            alt="ParkMate Logo"
            onClick={scrollToTop}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            arkMate
          </span>
        </Link>
        <div className="flex items-center md:order-2 relative">
          {!isLoggedIn() && (
            <div className="mr-2 text-white px-3 py-1 rounded-full font-bold bg-green-500 hover:bg-green-600 cursor-pointer sm:mr-4">
              <Link to="/login" onClick={scrollToTop}>
                Login 👋🏼
              </Link>
            </div>
          )}
          {isLoggedIn() && (
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isUserDropdownOpen}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={toggleUserDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <HiUserCircle className="h-9 w-9 text-slate-300 hover:text-sky-200" />
            </button>
          )}
          <div
            style={{ top: "130%", right: "-5%" }}
            className={`${
              isUserDropdownOpen ? "block" : "hidden"
            } absolute mt-2 mr-3 origin-top-right w-48 rounded-md shadow-lg bg-gray-900 border divide-y divide-gray-600 `}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <p className="text-gray-300">Hello,</p>
              {user ? (
                <span className="block text-lg font-bold text-white">
                  {user.username}
                </span>
              ) : (
                <span className="block text-sm text-white">Loading...</span>
              )}
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-md text-white hover:text-sky-500"
                  onClick={scrollToTop}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="block px-4 py-2 text-md text-white hover:text-sky-500"
                  onClick={scrollToTop}
                >
                  Bookings
                </Link>
              </li>
              <li>
                {isLoggedIn() && (
                  <div
                    className="block px-4 py-2 text-md text-red-500 hover:text-red-600 hover:cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </div>
                )}
              </li>
            </ul>
          </div>
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
              <AiOutlineClose className="w-5 h-5 hover:text-sky-400" />
            ) : (
              <AiOutlineMenu className="w-5 h-5 hover:text-sky-400" />
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="xl:mr-24 flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white/0 bg-gray-800 md:dark:bg-gray-900/0 border-gray-700">
            <li>
              <Link
                offset={50}
                duration={500}
                to="/"
                className="block  py-2 pl-3 pr-4 rounded  md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700"
                aria-current="page"
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
                onClick={scrollToTop}
              >
                Vehicle Registration
              </Link>
            </li>
            <li>
              <Link
                to="/slot-booking"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
                onClick={scrollToTop}
              >
                Book a Slot
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
                onClick={scrollToTop}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block  py-2 pl-3 pr-4  rounded   md:hover:text-blue-700 md:p-0 text-white hover:bg-gray-700 hover:text-blue-400 md:hover:bg-transparent border-gray-700 "
                onClick={scrollToTop}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
