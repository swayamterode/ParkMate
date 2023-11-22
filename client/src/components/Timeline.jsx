import { Link } from "react-router-dom";
import directionImg from "../assets/directions-animate.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { timeline } from "../constants/TimelineConstants";
const Steps = () => {
  return (
    <>
      <section className="bg-gray-900 ">
        <div className="container min-h-screen -mt-24 px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          {/* Write Steps here */}
          <div className="wf-ull lg:w-1/2">
            {/* heading */}
            <h1 className="mt-3 text-3xl font-bold text-white md:text-6xl md:text-left text-center">
              {timeline.title}
            </h1>

            <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-6">
              {/* Register */}
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeline.step1.step}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {timeline.step1.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {timeline.step1.description}
                </p>
                <Link
                  to="/book"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  {timeline.step1.buttonText}
                  <HiArrowNarrowRight className="text-xl ml-2" />
                </Link>
              </li>
              {/* Location */}
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeline.step2.step}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {timeline.step2.title}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {timeline.step2.description}
                </p>
              </li>
              {/* Choose Date */}
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeline.step3.step}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {timeline.step3.title}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {timeline.step3.description}
                </p>
              </li>
              {/* Time is fixed */}
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeline.step4.step}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {timeline.step4.title}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {timeline.step4.description}
                </p>
              </li>

              {/* Select vehicle from your registered vehicles */}
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeline.step5.step}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {timeline.step5.title}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {timeline.step5.description}
                </p>
                <Link
                  to="/slot-booking"
                  className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  {timeline.step5.buttonText}{" "}
                  <HiArrowNarrowRight className="text-xl ml-2" />
                </Link>
              </li>
            </ol>
          </div>

          {/* Import Image Here  */}
          <div className=" w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src={directionImg}
              alt="Directions Logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
