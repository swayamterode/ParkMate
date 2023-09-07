import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
// import AlreadyLoggedin from "./AlreadyLoggedin";
const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState(""); // New state to store the logged-in username
  const [userNotFound, setUserNotFound] = useState(""); // New state to store the login error
  const [userPassword, setUserPassword] = useState(""); // New state to store the login error


    // Check if the user is already logged in when the component mounts
    useEffect(() => {
      if (localStorage.getItem("token")) {
        // User is already logged in, redirect to home or dashboard
        navigate("/login_");
      }
    }, [navigate]);

    
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {}; // To store errors

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    axios
      .post("http://localhost:3001/login", formData)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          // Store the token in local storage
          localStorage.setItem("token", res.data.token);

          // Store the userId in local storage
          localStorage.setItem("userId", res.data.userId);
          setLoggedInUsername(formData.email); // Store the logged-in username
          setShowPopup(true); // Show the popup

          setTimeout(() => {
            setShowPopup(false);
            navigate("/");
          },2300); // Adjust the time as needed
        } else {
          // if the email is not found in the database
          if (res.data.message === "User does not exist") {
            // Show a pop-up message indicating that the user was not found
            setUserNotFound(true);

            setTimeout(() => {
              setUserNotFound(false);
              navigate("/signup");
            }, 2000); // Adjust the time as needed
          }
          // if the password is incorrect
          else if (res.data.message === "Incorrect password") {
            setUserPassword(true);
            setTimeout(() => {
              setUserPassword(false);
            }, 2000);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        // Handle other errors if necessary
      });
  };

  // Function to validate email format using regular expression
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const isLoggedIn = () => {
  //   return localStorage.getItem("token") !== null;
  // };

  return (
    <>
      <Navbar />
      {(
        <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
          <div
            className=" flex flex-col max-w-md p-6 rounded-3xl sm:p-10 w-5/6 bg-gray-900 text-gray-100 mt-20
        hover:shadow-xl transition-all duration-200"
          >
            <div className="flex justify-center ">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="logo"
                className="w-10"
              />
            </div>

            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">ParkMate</h1>
              <p className="text-lg text-gray-300">
                Sign in to access your account 🔐
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline text-gray-400 hover:text-sky-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-md bg-sky-400 text-gray-900 font-bold"
                  >
                    Sign in
                  </button>
                </div>
                <p className="px-6 text-sm text-center text-gray-400">
                  Not registered with us?{" "}
                  <Link
                    rel="noopener noreferrer"
                    to="/signup"
                    className="hover:underline text-sky-400"
                  >
                    Sign up
                  </Link>
                  .
                </p>

                {/* User logedin pop up ✅ */}
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-90">
                    <div className="bg-gray p-6 rounded-2xl shadow">
                      <p className="text-green-400 font-bold text-lg mb-3 flex items-center justify-center">
                        Welcome, {loggedInUsername}! <br></br> you have been
                        signed in successfully!
                      </p>
                      <div className="flex items-center justify-center text-center">
                        <div className="animate-spin rounded-full h-6 w-6 mr- 3 border-t-4 border-blue-600"></div>
                        <p className="ml-2 text-white-500 ">
                          Redirecting to home page..
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* user not Found  handeled ✅ */}
                {userNotFound && (
                  <div className="fixed inset-0  flex items-start justify-center z-50">
                    <div className="bg-gray-900 p-2 px-12 rounded-xl shadow-md flex items-center sm:mt-[68px] mt-20">
                      {/* svg here */}
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-red-600 text-sm font-semibold">
                          No user found with this Email !
                        </p>
                        <p className="text-sm text-green-400">
                          Hold on, redirecting to sign up page...
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Wrong user password handeled ✅ */}
                {userPassword && (
                  <div className="fixed inset-0  flex items-start justify-center z-50">
                    <div className="bg-gray-900 p-2 px-12 rounded-xl shadow-md flex items-center sm:mt-[68px] mt-20">
                      {/* svg here */}
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-red-600 text-sm font-semibold">
                          Wrong Password !
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Signin;
