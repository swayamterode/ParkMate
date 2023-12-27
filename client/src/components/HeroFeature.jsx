import { Link } from "react-router-dom";
import herosvg from "../assets/parking-animate.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};
const Hero = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };
  return (
    <>
      <section className="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] mt-[70px] h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <Link
            to="/slot-booking"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              We are now live in Pune!
            </span>
            <HiArrowNarrowRight className="text-xl ml-2" />
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
            Book your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-red-400 ">
              Parking{" "}
            </span>{" "}
            Slot Today!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Bid farewell to endlessly circling the block in search of a
            hard-to-find parking space or grappling with outdated payment
            methods.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
            {!isLoggedIn() ? (
              <>
                <Link
                  rel="noopener noreferrer"
                  to="/login-before-booking"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  onClick={scrollToTop}
                >
                  Book Slot
                  <HiArrowNarrowRight className="text-xl ml-2" />
                </Link>

                <Link
                  rel="noopener noreferrer"
                  to="/pricing"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                  onClick={scrollToTop}
                >
                  See Pricing
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/slot-booking"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  onClick={scrollToTop}
                >
                  Book Slot
                  <HiArrowNarrowRight className="text-xl ml-2" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                  onClick={scrollToTop}
                >
                  See Pricing
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center justify-center lg:mt-8 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={herosvg}
              alt="Parking"
              className="object-contain h-72 sm:h-80 lg:h-[450px] lg:mt-10 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b  from-blue-950 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </>
  );
};

export default Hero;
