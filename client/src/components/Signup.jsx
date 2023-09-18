import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import Footer from "./Footer";
import axios from "axios";
import { PiNumberCircleOneBold } from "react-icons/pi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PiNumberCircleTwoBold } from "react-icons/pi";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "", //idhr error tha!
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    } else if (formData.email !== formData.email.toLowerCase()) {
      newErrors.email = "Email must be in lowercase.";
    } else if (
      !formData.email.endsWith("@gmail.com") &&
      !formData.email.endsWith("@yahoo.com")
    ) {
      newErrors.email =
        "Only @gmail.com and @yahoo.com email domains are allowed.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one capital letter.";
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [showPopup, setShowPopup] = useState(false);
  const [userExists, setUserExists] = useState(false); // Initialize userExists state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, perform desired action (e.g., submit to server)
      axios
        .post("http://localhost:3001/register", formData)
        .then((response) => {
          if (response.data.message === "User already exists") {
            setUserExists(true); // Set userExists state to true if the user already exists
            setTimeout(() => {
              setUserExists(false); // Hide the popup after some time
            }, 2000); // Adjust the time as needed
          } else {
            setShowPopup(true); // Show the success popup
            setTimeout(() => {
              setShowPopup(false); // Hide the popup after some time
              const userId = response.data.userId;
              localStorage.setItem("userId", userId);
              navigate(`/vehicle_on_signup`); // Navigate to the vehicle registration page
            }, 2000); // Adjust the time as needed
          }
        })
        .catch((err) => {
          setShowPopup(false); // Hide the loading popup on error
          console.error(err);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // User is already logged in, redirect to home or dashboard
      navigate("/signup_");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className=" mt-20 w-5/6 flex flex-col max-w-md p-6 rounded-3xl sm:p-10 bg-gray-900 text-gray-100">
          <div className="flex justify-center items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className=" flex justify-center"
            />
          </div>
          <div className="mb-4 text-center">
            <h1 className="my-3 text-4xl font-bold">ParkMate</h1>
            <p className="text-lg text-gray-300">
              Create your account to get started.
            </p>

            {/* Progress Bar */}
            <div className="mt-8 mb-4 w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <ol className="flex items-center w-full gap-14 sm:gap-3 p-2 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                <li className="flex items-center text-blue-500">
                  <PiNumberCircleOneBold className="flex items-center justify-center w-6 h-6 mr-2 text-xs"></PiNumberCircleOneBold>
                  Personal <span className="hidden sm:inline ml-2"> Info</span>
                  <FaAngleDoubleRight className="w-4 h-4 ml-2 sm:ml-4"></FaAngleDoubleRight>
                </li>
                <li className="flex items-center cursor-not-allowed">
                  <PiNumberCircleTwoBold className="flex items-center justify-center w-6 h-6 mr-2 text-xs"></PiNumberCircleTwoBold>
                  Car <span className="hidden sm:inline ml-2"> Details</span>
                  <FaAngleDoubleRight className="w-4 h-4 ml-2 sm:ml-4"></FaAngleDoubleRight>
                </li>
              </ol>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
              {/* username */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="username" className="text-md">
                    Enter your full name
                  </label>
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full text-sm px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  required
                />
                {errors.username && (
                  <p className="text-red-500 text-sm ">{errors.username}</p>
                )}
              </div>
              {/* email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-md">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full text-sm px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm ">{errors.email}</p>
                )}
              </div>
              {/* password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-md">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min 8 characters, 1 capital & 1 special character"
                  className="text-sm w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm text-bold">
                    {errors.password}
                  </p>
                )}
              </div>
              {/* confirm password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="confirmPassword" className="text-md">
                    Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Min 8 characters, 1 capital & 1 special character"
                  className="w-full px-3 text-sm py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm items-center text-bold">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-bold rounded-md bg-sky-400 text-gray-900"
                >
                  Create Account
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Already have an account?
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="hover:underline text-sky-400"
                >
                  Sign in
                </Link>
                .
              </p>
              {/* Popup */}
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                  <div className="bg-gray p-3 rounded shadow">
                    <div className="flex flex-row items-center justify-center">
                      <FaUserCheck className="text-green-500 text-2xl " />
                      <p className="text-green-500 font-bold text-lg mb-3 pt-3 ml-2 ">
                        You&apos;re a ParkMate Member! 🎉🥳
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-center">
                      <div className="animate-spin rounded-full h-6 w-6 mr- 3 border-t-4 border-green-400"></div>
                      <p className="ml-2 font-bold text-white">
                        Redirecting to Vehicle Registration Page...
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* User already exists */}
              {userExists && (
                <div className="fixed inset-0  flex items-start justify-center z-50">
                  <div className="bg-gray-950 p-2 px-12 rounded-xl shadow-md flex items-center sm:mt-[72px] mt-20">
                    {/* svg here */}
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-red-600 text-sm font-semibold">
                        User already exists!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
