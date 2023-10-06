import { Link } from "react-router-dom";
import herosvg from "../assets/hero.svg";
const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};
const SecondaryHero = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <>
      <div className="sm:py-4 bg-gray-900  py-14" name="home">
        <section className="bg-gray-900 text-gray-100 mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                Book your
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                  {" "}
                  Parking{" "}
                </span>{" "}
                Slot Today!
              </h1>
              <p className="mt-6 mb-8 text-xl sm:mb-12">
                <br className="hidden md:inline lg:hidden text-justify whitespace-normal text-gray" />{" "}
                Say goodbye to circling the block in search of an elusive
                parking spot or dealing with outdated payment methods.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                {!isLoggedIn() ? (
                  // if logged in
                  <>
                    <Link
                      rel="noopener noreferrer"
                      to="/login-before-booking"
                      className="px-8 py-3 text-lg font-bold rounded bg-sky-400 text-gray-900 hover:bg-sky-600 hover:text-gray-100"
                      onClick={scrollToTop}
                    >
                      Book Slot
                    </Link>

                    <Link
                      rel="noopener noreferrer"
                      to="/pricing"
                      className="px-8 py-3 text-lg font-bold border rounded border-gray-100"
                      onClick={scrollToTop}
                    >
                      See Pricing
                    </Link>
                  </>
                ) : (
                  // if not logged in
                  <>
                    <Link
                      rel="noopener noreferrer"
                      to="/slot-booking"
                      className="px-8 py-3 text-lg font-bold rounded bg-sky-400 text-gray-900 hover:bg-sky-600 hover:text-gray-100"
                      onClick={scrollToTop}
                    >
                      Book Slot
                    </Link>

                    <Link
                      rel="noopener noreferrer"
                      to="/pricing"
                      className="px-8 py-3 text-lg font-bold border rounded border-gray-100"
                      onClick={scrollToTop}
                    >
                      See Pricing
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={herosvg}
                alt="Parking"
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SecondaryHero;
