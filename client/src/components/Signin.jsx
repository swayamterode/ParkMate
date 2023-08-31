import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
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

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // axios call
    axios
      .post("http://localhost:3001/login", formData)
      .then((res) => {
        console.log(res.res);
        if (res.data === "Success") {
          setLoggedInUsername(formData.email); // Store the logged-in username
          setShowPopup(true); // Show the popup
          setTimeout(() => {
            setShowPopup(false);
            navigate("/");
          }, 2000); // Adjust the time as needed
        }
        else{
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });

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

    if (Object.keys(newErrors).length === 0) {
      // Perform login logic
    }
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className="w-[400px] flex flex-col max-w-md p-6 rounded-3xl sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center ">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
          </div>

          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
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
                  placeholder="ravishankar56@gmail.com"
                  className={`w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ${errors.email ? "border-red-500" : ""
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
                    className="text-xs hover:underline dark:text-gray-400 hover:text-sky-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  className={`w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ${errors.password ? "border-red-500" : ""
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
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-sky-400 dark:text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Not registered with us?{" "}
                <Link
                  rel="noopener noreferrer"
                  to="/signup"
                  className="hover:underline dark:text-sky-400"
                >
                  Sign up
                </Link>
                .
              </p>
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-90">
                  <div className="bg-gray p-6 rounded-2xl shadow">
                    <p className="text-green-400 font-bold text-lg mb-3 flex items-center justify-center">
                      Welcome, {loggedInUsername}! <br></br> you have been signed in successfully!
                    </p>
                    <div className="flex items-center justify-center text-center">
                      <div className="animate-spin rounded-full h-6 w-6 mr- 3 border-t-4 border-blue-600"></div>
                      <p className="ml-2 text-white-500 ">Redirecting to home page..</p>
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

export default Signin;
