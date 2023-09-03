import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Book = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Show the general popup
    setShowPopup(true);
    setTimeout(() => {
      // Hide the general popup after 1 second
      setShowPopup(false);
  
      // Show the login popup
      setShowLoginPopup(true);
  
      setTimeout(() => {
        // Hide the login popup after 3 seconds
        setShowLoginPopup(false);
  
        // Navigate to the "/login" page
        navigate("/login");
      }, 2000); // Hide the login popup after 3 seconds
    }, 1000); // Hide the general popup after 1 second
  };
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-900 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Vehicle Registration</h1>
            <p className="text-sm text-gray-400">
              You must Register atleast one vehicle to get started!
            </p>
          </div>
          <form noValidate action="" className="space-y-12">
            <div className="space-y-4">
              {/* Fname aur lname side by side */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="text" className="text-md ml-2 ">
                    License Plate Number (Don't include spaces)
                  </label>
                </div>
                <input
                  type="text"
                  name="licensePlate"
                  id="licensePlate"
                  placeholder="Enter your license plate number"
                  className="w-full px-3 py-2 ml-1 border rounded-md uppercase  border-gray-700 bg-gray-900 text-gray-100"
                  required
                  maxLength={10}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-sky-400 text-gray-900"
                  onClick={handleButtonClick}
                >
                  Register Vehicle
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Your vehicle will be registered to your account
              </p>
            </div>
          </form>
          {showPopup && (
            <div className="fixed inset-0 flex mt-24 items-start justify-center z-50">
              <div className="bg-gray-900 p-2 rounded-xl shadow-md flex items-center">
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
                <div className="flex flex-col">
                  <p className="text-green-600 text-sm font-semibold">
                    Vehicle Registered Successfully!
                  </p>
                </div>
              </div>
            </div>
          )}
          {showLoginPopup && (
            <div className="fixed inset-0 flex mt-24 items-start justify-center z-50">
              <div className="bg-gray-900 p-2 rounded-xl shadow-md flex items-center">
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
                <div className="flex flex-col">
                  <p className="text-green-600 text-sm font-semibold">
                    Redirecting to Login Page...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
