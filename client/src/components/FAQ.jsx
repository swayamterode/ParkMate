import { FcFaq } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
const Faq = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white flex justify-center items-center">
            <FcFaq className="mr-4" />
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t md:gap-16 border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" />
                  What is Park-Mate, and how does it work?
                </h3>
                <p className="text-gray-400">
                  Park-mate allows online parking booking with automated gate
                  access via license plate scanning.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" />
                  How do I book a parking spot with Park-mate?
                </h3>
                <p className="text-gray-400">
                  Book a parking slot easily on our website. Choose location,
                  date, time, enter your license plate, and pay.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" />
                  What if the gate doesn&apos;t open even after I&apos;ve made a
                  valid booking?
                </h3>
                <p className="text-gray-400">
                  In the rare event that the gate doesn&apos;t open, you can
                  reach out to our customer support, our trained staff is on
                  standby to swiftly to resolve the issue and ensure a smooth
                  parking experience for our customers.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" />
                  How does Park-mate handle license plate changes?
                </h3>
                <p className="text-gray-400">
                  Park-mate makes updating license plate info easy. Choose
                  &quot;New License Plate&quot; or &quot;Already Registered
                  Vehicle&quot; on our website for a seamless transition without
                  impacting reservations.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" />
                  Can I book for multiple days or a week ahead?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, you can make multiple bookings in advance within a week.
                  Plan your parking ahead with ease!
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  Can I extend my parking time if needed?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Currently, the capability or feature mentioned is not
                  available. However, we are actively working on developing or
                  implementing it for the future.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  Any specific steps to leave after my reservation ends?
                </h3>
                <p className="text-gray-400">
                  Exiting is easy—gate opens automatically at end of
                  reservation. Contact support if needed.
                </p>
                <p className="text-gray-400">
                  please provide your feedback while exiting the parking lot.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  Can I get help on-site with Park-mate?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Absolutely. If you need any assistance or have questions while
                  using our system, look for on-site staff or feel free to
                  contact our customer support team. We&apos;re here to help and
                  ensure you have a trouble-free parking experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
