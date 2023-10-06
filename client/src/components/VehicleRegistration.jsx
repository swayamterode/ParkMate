import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SiDirectus } from "react-icons/si";
import { GoAlertFill } from "react-icons/go";
import { BsCheckCircle } from "react-icons/bs";
import Navbar from "./Navbar";
import axios from "axios";
import logo from "../assets/mainLogo.svg";

const VehicleRegistrationOnSignup = () => {
  const [formData, setFormData] = useState({
    license_number: "",
  });
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [errors, setErrors] = useState("");

  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to your server
      const response = await axios.post(
        "https://parkmatebackend.onrender.com/vehicle-registration",
        {
          userId: userId, // Send the userId
          license_number: formData.license_number, // Adjust this based on your form data
        }
      );

      // Check the response and handle accordingly
      if (response.data.message === "Vehicle Registered") {
        // Show the success popup
        setShowPopup(true);
        setTimeout(() => {
          // Hide the success popup after 1 second
          setShowPopup(false);

          // Show the redirecting popup
          setShowLoginPopup(true);

          setTimeout(() => {
            // Hide the redirecting popup after 3 seconds
            setShowLoginPopup(false);

            // Navigate to the "/login" page
            navigate("/login");
          }, 3000); // Hide the redirecting popup after 3 seconds
        }, 1000); // Hide the success popup after 1 second
      } else {
        setErrors(response.data.message);
        setTimeout(() => {
          setErrors("");
        }, 3000);
        console.error(response.data.message);
      }
    } catch (error) {
      setErrors("An error occurred during vehicle registration");
      setTimeout(() => {
        setErrors("");
      }, 3000);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className="mt-10 w-5/6 flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-900 text-gray-100">
          <div className="flex justify-center">
            <img
              src={logo}
              className="h-9 lg:h-12"
              alt="ParkMate Logo"
              onClick={scrollToTop}
            />
          </div>
          <div className="mb-8 text-center flex flex-col gap-4 ">
            <h1 className="my-3 text-4xl font-bold">Vehicle Registration</h1>
            <p className="text-sm text-gray-300">
              You must Register atleast one vehicle to get started!
            </p>
            <p className="text-xs text-gray-400">
              Why we need your License Number?
            </p>
            {/* Progress Bar */}
            <div className="mt-2 w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <ol className="flex items-center w-full gap-14 sm:gap-3 p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                {/* Use Details */}
                <li className="flex items-center text-green-500 cursor-not-allowed">
                  <BsCheckCircle className="h-5 w-5 mr-2" />
                  Personal Info
                  <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 9l4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>

                <li className="flex items-center text-blue-500">
                  <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                    2
                  </span>
                  Car Details
                  <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 9l4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>
              </ol>
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate className="space-y-12">
            <div className="space-y-4">
              {/* Fname aur lname side by side */}
              <div>
                <label htmlFor="license_number" className="text-md ml-2">
                  License Plate Number (Don&apos;t include spaces)
                </label>
                <input
                  type="text"
                  name="license_number"
                  id="license_number"
                  placeholder="Enter your license plate number"
                  className={`w-full px-3 py-2 ml-1 border rounded-md uppercase  border-gray-700 bg-gray-900 text-gray-100 `}
                  required
                  maxLength={10}
                  value={formData.license_number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-sky-400 text-gray-900"
                  onClick={handleSubmit}
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
                <BsFillCheckCircleFill className="h-6 w-6 text-green-400 mr-2" />
                <div className="flex flex-col">
                  <p className="text-green-400 text-sm font-semibold">
                    Vehicle Registered Successfully!
                  </p>
                </div>
              </div>
            </div>
          )}
          {showLoginPopup && (
            <div className="fixed inset-0 flex mt-24 items-start justify-center z-50">
              <div className="bg-gray-900 p-2 rounded-xl shadow-md flex items-center">
                <SiDirectus className="h-6 w-6 text-green-400 mr-2" />
                <div className="flex flex-col">
                  <p className="text-green-400 text-sm font-semibold">
                    Redirecting to Login Page...
                  </p>
                </div>
              </div>
            </div>
          )}
          {errors && (
            <div className="fixed inset-0 flex mt-24 items-start justify-center z-50">
              <div className="bg-gray-950 p-2 rounded-xl shadow-md flex items-center">
                <GoAlertFill className="h-6 w-6 text-yellow-500 mr-2 ml-2" />
                <div className="flex flex-col">
                  <p className="text-red-500 text-sm font-semibold">{errors}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VehicleRegistrationOnSignup;
