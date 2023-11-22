import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { pricingText } from "../constants/PricingConstants";

export default function Example() {
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <>
      <Navbar />
      {/* Pricing Section */}
      <div
        className="pt-24 min-h-screen bg-gray-800 py-4 sm:pt-24"
        name="pricing"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:mt-28">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-4xl text-center font-bold tracking-tight text-white sm:text-4xl">
              {pricingText.title}
            </h2>
            <p className="mt-6 text-2xl font-light text-center leading-8 text-white">
              {pricingText.description}{" "}
              <span className="text-4xl font-bold text-green-400">
                {pricingText.price}/{pricingText.currency}{" "}
              </span>
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10  lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {pricingText.title}
              </h3>
              <p className="mt-6 text-base leading-7 text-white">
                {pricingText.description}
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-green-400">
                  {pricingText.whatIncluded}
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
              >
                {pricingText.includedFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
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
                    {pricingText.payOnce}
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {pricingText.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      {pricingText.currency}
                    </span>
                  </p>
                  {!isLoggedIn() ? (
                    <Link
                      to="/login-before-booking"
                      className="mt-10 block w-full rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {pricingText.bookNow}
                    </Link>
                  ) : (
                    <Link
                      to="/slot-booking"
                      className="mt-10 block w-full rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {pricingText.bookNow}
                    </Link>
                  )}

                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    {pricingText.invoicesAndReceipts}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Pricing Section */}
      <Footer />
    </>
  );
}
