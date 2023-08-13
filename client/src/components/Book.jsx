import { useState } from "react";
import Navbar from "./Navbar";

const Book = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide the popup after 3 seconds
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-col max-w-md p-6 rounded-xl sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Vehicle Registration</h1>
            <p className="text-sm dark:text-gray-400">
              Register your vehicle to get started
            </p>
          </div>
          <form noValidate action="" className="space-y-12">
            <div className="space-y-4">
              {/* Fname aur lname side by side */}
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label htmlFor="fname" className="block font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lname" className="block font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="text" className="text-sm">
                    License Plate Number
                  </label>
                </div>
                <input
                  type="text"
                  name="licensePlate"
                  id="licensePlate"
                  placeholder="Enter your license plate number"
                  className="w-full px-3 py-2 border rounded-md uppercase  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  required
                  maxLength={10}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-sky-400 dark:text-gray-900"
                  onClick={handleButtonClick}
                >
                  Register Vehicle
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Your vehicle will be registered to your account
              </p>
            </div>
          </form>
          {showPopup && (
            <div className="fixed inset-0 flex mt-24 items-start justify-center z-50">
              <div className="bg-green-100 p-2 rounded-xl shadow-md flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-green-600 text-sm font-semibold">
                  Vehicle Registered Successfully!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
