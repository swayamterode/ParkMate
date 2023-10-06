import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import logo from "../assets/mainLogo.svg";

const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link to="/">
            <img
              src={logo}
              className="h-9 lg:h-12"
              alt="ParkMate Logo"
              onClick={scrollToTop}
            />
          </Link>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Home{" "}
            </Link>

            <Link
              to="/pricing"
              onClick={scrollToTop}
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Pricing{" "}
            </Link>

            <Link
              to="/about"
              onClick={scrollToTop}
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Developers Team{" "}
            </Link>

            <Link
              to="/terms"
              onClick={scrollToTop}
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </Link>

            <Link
              to="/privacy"
              onClick={scrollToTop}
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © Copyright 2031. All Rights Reserved.
          </p>

          <div className="flex items-center justify-center -mx-2">
            <a
              href="https://github.com/swayamterode/ParkMate"
              rel="noopener noreferrer"
              target="_blank"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
            >
              <AiFillGithub className="text-2xl inline-block" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
