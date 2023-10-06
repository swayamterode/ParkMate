import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
import Hero from "./HeroFeature";
import { FcCheckmark } from "react-icons/fc";
import Feature from "./Feature";
import FAQ from "./FAQ";
const includedFeatures = [
  "Private Parking access",
  " 24/7 Security ",
  "Park your vehicle for a day",
  "Easy payment methods",
];
import Footer from "./Footer";

const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};

const Home = () => {
  // is loggedIn
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <>
      <Navbar />
      <Hero />
      {/* Pricing  Here!*/}
      <div className="pt-24 bg-gray-800 py-32 sm:pt-24" name="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-4xl text-center font-bold tracking-tight text-white sm:text-4xl">
              ParkMate Pricing
            </h2>
            <p className="mt-6 text-2xl font-light text-center leading-8 text-white">
              Simplify your parking experience with our straight forward pricing
              just at{" "}
              <span className="text-4xl font-bold text-green-400">
                ₹60/day{" "}
              </span>
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                ParkMate Pricing
              </h3>
              <p className="mt-6 text-base leading-7 text-white">
                Budget-friendly, flexible, suits short stays, straight forward
                pricing. Convenient for travelers, workers, and frequent
                visitors.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-green-400">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <FcCheckmark
                      className="h-6 w-5 flex-none text-green-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, own it for a Day!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      ₹60
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      INR
                    </span>
                  </p>
                  {!isLoggedIn() ? (
                    <Link
                      to="/login-before-booking"
                      className="mt-10 block w-full rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={scrollToTop}
                    >
                      Book the slot now!
                    </Link>
                  ) : (
                    <Link
                      to="/slot-booking"
                      className="mt-10 block w-full rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={scrollToTop}
                    >
                      Book the slot now!
                    </Link>
                  )}
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Here!*/}
      <Feature />
      {/* Timeline Here!*/}
      <Timeline />
      <FAQ/>
      <Footer />
    </>
  );
};

export default Home;
