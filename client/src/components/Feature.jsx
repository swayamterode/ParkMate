import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import man from "../assets/jumpMan.svg";
const Feature = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className="container max-w-8xl px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:space-y-16 lg:w-1/2 lg:ml-10">
            <div className="text-center md:text-left">
  <h1 className="text-2xl font-semibold capitalize lg:text-4xl text-white">
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

              {/* Secure Parking */}
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize text-white">
                    Secure Parking
                  </h1>

                  <p className="mt-3 text-gray-300 text-lg">
                    Parking is a breeze with ParkMate. We offer secure parking
                    in the heart of the city. Our parking lots are well lit and
                    monitored by CCTV cameras 24/7.
                  </p>
                </div>
              </div>
              {/* Advance Slot Booking */}
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize text-white">
                    Advance Slot Booking
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Booking the slot is easy with ParkMate. You can book the
                    slot in advance and can also book the slot on the spot if
                    slots are available.
                    <br /> We are now live in Pune! Book your slot now.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize text-white">
                    elegant Dark Mode
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>
              </div>
              <div className="flex md:justify-center lg:justify-start">
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
