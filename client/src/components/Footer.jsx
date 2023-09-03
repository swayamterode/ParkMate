import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-gray-800 text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" onClick={scrollToTop}/>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link to="/terms" onClick={scrollToTop}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" onClick={scrollToTop}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricing">Pricing Price</Link>
          </li>
          <li>
            <Link to="/about" onClick={scrollToTop}>
              Developers
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
