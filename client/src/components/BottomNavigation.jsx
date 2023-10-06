import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { TbCoinRupee } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const BottomNavigation = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="fixed z-50 w-full h-24 max-w-lg -translate-x-1/2  bottom-0 left-1/2 rounded-t-3xl bg-gray-950 border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          {/* Home Button */}
          <div className="inline-flex flex-col items-center justify-center px-5 rounded-tl-3xl hover:bg-gray-800 group">
            <Link
              to="/"
              className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group"
            >
              <AiFillHome className="w-6 h-6 mb-3 text-gray-400 group-hover:text-blue-500 flex items-center justify-center" />
              <div className="text-gray-400 group-hover:text-blue-500">
                Home
              </div>
            </Link>
          </div>

          {/* Car Button */}
          <div className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group">
            <Link
              to="/"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
              // style={activeLinkStyle} // Apply the styles here
            >
              <FaCar className="w-6 h-6 mb-3 text-gray-400 group-hover:text-blue-500" />
              <div className="text-gray-400 group-hover:text-blue-500">
                Register
              </div>
            </Link>
          </div>

          {/* Sloot Booking */}
          <div className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group">
            <Link
              to="/slot-booking"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
            >
              <BsFillCalendarMinusFill className="w-6 h-6 mb-3 text-gray-400 group-hover:text-blue-500" />
              <div className="text-gray-400 group-hover:text-blue-500">
                Book
              </div>
            </Link>
          </div>

          {/* Rupee */}
          <div className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group">
            <Link
              to="/pricing"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
            >
              <TbCoinRupee className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-500" />
              <div className="text-gray-400 group-hover:text-blue-500">
                Pricing
              </div>
            </Link>
          </div>

          {/* Profile */}
          <div className="inline-flex flex-col items-center justify-center px-5 rounded-tr-3xl hover:bg-gray-800 group">
            <Link
              to="/login"
              className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group"
            >
              <FaUserCircle className="w-7 h-7 mb-3 text-gray-400 group-hover:text-blue-500" />
              <div className="text-gray-400 group-hover:text-blue-500">
                User
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
