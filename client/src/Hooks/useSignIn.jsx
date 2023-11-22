import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSignIn = () => {
  const [loading, setLoading] = useState(false); // New state for loading spinner

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
    setLoading(true); // Set loading to true when form is submitted

    axios
      .post("https://parkmatebackend.onrender.com/login", formData)
      .then((res) => {
        // console.log(res);
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
          }, 2300); // Adjust the time as needed
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
        setLoading(false); // Set loading to false when response is received
      })
      .catch((err) => {
        setLoading(false); // Set loading to false when an error occurs
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

  return {
    loading,
    formData,
    errors,
    handleChange,
    handleSubmit,
    showPopup,
    loggedInUsername,
    userNotFound,
    userPassword,
  };
};

export default useSignIn;
