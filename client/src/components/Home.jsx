import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { CheckIcon } from "@heroicons/react/20/solid";
const includedFeatures = [
  "Private Parking access",
  " 24/7 Security ",
  "Park your vehicle for a day",
  "Easy payment methods",
];
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="sm:py-4 bg-gray-800  py-14" name="home">
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
                src="../src/assets/car4.svg"
                alt="World Card"
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Book Now Section */}

      {/* Pricing  Here!*/}
      <div className="pt-24 bg-gray-800 py-4 sm:pt-24" name="pricing">
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
                    <CheckIcon
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
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Procced to Pay
                  </a>
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
      {/* Footer Starts here! */}
      <Footer />
    </>
  );
};

export default Home;
