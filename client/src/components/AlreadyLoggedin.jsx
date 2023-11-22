import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineLogout } from "react-icons/ai";
import directionImg from "../assets/directions-animate.svg";

import {
  ERROR_MESSAGE,
  LOGIN_ROUTE_MESSAGE,
  LOGGED_IN_MESSAGE,
  GO_BACK_TO_HOME,
  DOCUMENTATION_LINK_TEXT,
  DOCUMENTATION_SOON_TEXT,
  PRICING_LINK_TEXT,
  PRICING_DESCRIPTION,
  MEET_THE_TEAM_LINK_TEXT,
  MEET_THE_TEAM_DESCRIPTION,
} from "../constants/AlreadyLoggedInConstants";
import useAlreadySignedIn from "../Hooks/useAlreadySignedIn";

const AlreadyLoggedin = () => {
  const { isLoggedIn, handleLogout } = useAlreadySignedIn();
  return (
    <div>
      <Navbar />
      <section className="bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400 opacity-0">
              {ERROR_MESSAGE}
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              {LOGIN_ROUTE_MESSAGE}
            </h1>
            <p className="mt-4 text-gray-400">{LOGGED_IN_MESSAGE}</p>

            <div className="flex items-center mt-6 gap-x-3">
              <Link
                to="/"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-400 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>{GO_BACK_TO_HOME}</span>
              </Link>
              {isLoggedIn() && (
                <div
                  className="w-1/2 px-5 py-2 text-sm flex items-center justify-center tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-red-400 bg-red-600 hover:cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                  <AiOutlineLogout className="w-5 h-5 ml-2" />
                </div>
              )}
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>{DOCUMENTATION_LINK_TEXT}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {DOCUMENTATION_SOON_TEXT}
                </p>
              </div>

              <div>
                <Link
                  to="/pricing"
                  className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>{PRICING_LINK_TEXT}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {PRICING_DESCRIPTION}
                </p>
              </div>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>{MEET_THE_TEAM_LINK_TEXT}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {MEET_THE_TEAM_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src={directionImg}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlreadyLoggedin;
