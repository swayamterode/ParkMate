import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import man from "../assets/jumpMan.svg";
import { FEATURES } from "../constants/FeatureConstants";

const Feature = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className="container max-w-8xl px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:space-y-16 lg:w-1/2 lg:ml-10">
              <div className="text-center md:text-left">
                <h1 className="text-3xl capitalize lg:text-5xl text-white font-bold">
                  What does <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-red-400 md:text-center">
                    ParkMate{" "}
                  </span>{" "}
                  Offers?
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-64 h-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
              </div>

              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="md:flex md:items-start md:-mx-4  p-6 border  rounded-lg shadow bg-gray-800 border-gray-700 lg:bg-gray-800/0 lg:border-gray-700/0"
                >
                  <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue-500">
                    {feature.icon}
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-xl font-semibold capitalize text-white">
                      {feature.title}
                    </h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex md:justify-center lg:justify-start justify-center items-center">
                <Link
                  to="/slot-booking"
                  className="text-blue-500 cursor-pointer font-bold text-lg md:text-xl text-center hover:text-yellow-400 sm:m-0"
                >
                  Happy Parking Book Slot Now
                  <MdOutlineKeyboardArrowRight className="inline-block text-2xl" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="ml-28 transition-all transform-gpu transition-600 ease-in-out hover:scale-110"
                src={man}
                alt="Car Image"
              />
            </div>
          </div>

          {/* Hr */}
          <hr className="my-12 border-gray-900" />
        </div>
      </section>
    </>
  );
};

export default Feature;
