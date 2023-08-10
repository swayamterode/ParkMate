import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Footer from "./Fotter";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="sm:py-4 bg-gray-800  py-14">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                Book your
                <span className="dark:text-sky-400"> Parking </span> Slot Today!
              </h1>
              <p className="mt-6 mb-8 text-xl sm:mb-12">
                <br className="hidden md:inline lg:hidden" /> Say goodbye to
                circling the block in search of an elusive parking spot or
                dealing with outdated payment methods.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  rel="noopener noreferrer"
                  to="/book"
                  className="px-8 py-3 text-lg font-semibold rounded dark:bg-sky-400 dark:text-gray-900"
                >
                  Book Slot
                </Link>
                <Link
                  rel="noopener noreferrer"
                  to="/pricing"
                  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
                >
                  See Pricing
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="../src/assets/scooter.png"
                alt="World Card"
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Pricing  Here!*/}
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
