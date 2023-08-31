import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform desired action (e.g., submit to server)
      axios
        .post("http://localhost:3001/user_info", formData)
        .then(() => {
          setShowPopup(true); // Show the success popup
          setTimeout(() => {
            setShowPopup(false); // Hide the popup after some time
            navigate("/login"); // Navigate to the login page
          }, 2000); // Adjust the time as needed
        })
        .catch((err) => {
          setShowPopup(false); // Hide the loading popup on error
          console.log(err);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className=" mt-20 w-5/6 flex flex-col max-w-md p-6 rounded-3xl sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className=" flex justify-center"
            />
          </div>
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm dark:text-gray-300">
              Create your account to get started.
            </p>
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
                  placeholder="Ajay Patil"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                  placeholder="ajaypatil@gmail.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                  placeholder="Eg: Ajay@123"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                  placeholder="Eg: Ajay@123"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-sky-400 dark:text-gray-900"
                >
                  Create Account
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Already have an account?
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="hover:underline dark:text-sky-400"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1"
                        x1="9.858"
                        x2="38.142"
                        y1="9.858"
                        y2="38.142"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#9dffce"></stop>
                        <stop offset="1" stop-color="#50d18d"></stop>
                      </linearGradient>
                      <path
                        fill="url(#IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1)"
                        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                      ></path>
                      <linearGradient
                        id="IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2"
                        x1="13"
                        x2="36"
                        y1="24.793"
                        y2="24.793"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".824" stop-color="#135d36"></stop>
                        <stop offset=".931" stop-color="#125933"></stop>
                        <stop offset="1" stop-color="#11522f"></stop>
                      </linearGradient>
                      <path
                        fill="url(#IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2)"
                        d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"
                      ></path>
                    </svg>
                    <p className="text-green-500 font-bold text-lg mb-3 pt-3 ml-2 ">
                      Success! 🥳 🎉
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <div className="animate-spin rounded-full h-6 w-6 mr- 3 border-t-4 border-green-400"></div>
                    <p className="ml-2 font-bold text-white">
                      Redirecting to login page...
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
