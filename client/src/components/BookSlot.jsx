import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import starman from "../assets/starman-animate.svg";
import mongoose from "mongoose";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { FaCar } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import Footer from "./Footer";

const BookSlotForm = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("21:00");
  const [vehicleRegistered, setVehicleRegistered] = useState("");
  const [slotsLeft, setSlotsLeft] = useState("");
  const [showNoSlotsPopup, setShowNoSlotsPopup] = useState(false);
  const [alreadyBookedMessage, setAlreadyBookedMessage] = useState("");
  const [user, setUser] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Error messages
  const [isLocationSelected, setIsLocationSelected] = useState("");
  const [isDateSelected, setIsDateSelected] = useState("");
  const [isVehicleSelected, setIsVehicleSelected] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: token,
        },
      };
      try {
        const response = await axios.get(
          "https://parkmatebackend.onrender.com/user-data",
          config
        );
        if (response.data.data == "token expired") {
          window.location.href = "/login";
          localStorage.clear();
        }
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  // Function to fetch slot information
  useEffect(() => {
    const fetchSlotInformation = async () => {
      if (!date) return; // If no date selected, return

      try {
        // Make a GET request to fetch slot information for the selected date
        const response = await axios.get(
          `https://parkmatebackend.onrender.com/getSlotsLeft?date=${date}`
        );
        if (response.data.message === "10 slots") {
          setSlotsLeft(10); // Update slotsLeft state with available slots
        } else if (response.data.slotsLeft) {
          setSlotsLeft(response.data.slotsLeft);
        }
      } catch (error) {
        console.error("Error fetching slot information:", error);
      }
    };

    fetchSlotInformation(); // Call the function to fetch slot information
  }, [date]); // Execute when the date changes

  const disablePastDates = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a reusable function to set and clear error messages
    const setErrorMessage = (setter, message, delay = 3000) => {
      setter(message);
      setTimeout(() => {
        setter(""); // Clear the message after a delay
      }, delay);
    };

    // Usage inside your handleSubmit function
    if (!location) {
      setErrorMessage(setIsLocationSelected, "Please Select one Location");
      return;
    }

    if (!date) {
      setErrorMessage(setIsDateSelected, "Please Select one Date");
      return;
    }

    if (!vehicleRegistered) {
      setErrorMessage(
        setIsVehicleSelected,
        "Please Select your Registered Vehicle"
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://parkmatebackend.onrender.com/slot-booking",
        {
          username: user.username,
          email: user.email,
          location,
          date,
          startTime,
          endTime,
          vehicleRegistered,
        }
      );

      // console.log(response.data.message);
      if (response.data.message === "Slot already booked.") {
        setAlreadyBookedMessage("You have already booked slot for this Day!");
        setTimeout(() => {
          setAlreadyBookedMessage(""); // Clear the message after a delay
        }, 3000);
        return;
      }
      if (response.data.message === "Slot Booked") {
        setSuccessMessage("Success");
        setTimeout(() => {
          setSuccessMessage(""); // Clear the message after a delay
          window.location.href = "https://buy.stripe.com/test_8wMbJH35agnKfAIfYY"; // Redirect to the Stripe payment page
        }, 3000);
      }
    } catch (error) {
      setShowNoSlotsPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowNoSlotsPopup(false);
  };

  // Fetch license plate numbers from the database
  const [licensePlate, setLicensePlate] = useState([]); // Initialize licensePlate as an empty array

  const fetchLicensePlate = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID is null. Please provide a valid user ID.");
      return;
    }

    // Check if mongoose is available (it's not available on the client-side)
    if (
      typeof mongoose === "undefined" ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      console.error("Invalid user ID format. Please provide a valid user ID.");
      return;
    }
    try {
      const response = await axios.get(
        `https://parkmatebackend.onrender.com/get-license-plate?userId=${userId}`
      );

      if (Array.isArray(response.data.license_number)) {
        setLicensePlate(response.data.license_number);
      } else {
        setLicensePlate([]);
      }
    } catch (error) {
      console.error("Error fetching license plate:", error);
    }
  };

  const navigate = useNavigate();
  const isLoggedIn = () => {
    return localStorage.getItem("userId") ? true : false;
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/user_not_loggedin");
    }
    fetchLicensePlate();
  }, [navigate]);

  const [isPuneSelected, setIsPuneSelected] = useState(false);

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <div className="shadow-lg mt-20 max-w-md lg:max-w-3xl  mx-auto p-6 sm:p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl">
              <h1 className="text-center text-4xl font-extrabold text-white mb-6">
                Book Parking Slot
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-white text-sm font-semibold mb-2"></label>
                  <select
                    className="w-full bg-gray-200 border-none rounded py-4 px-6 text-gray-900"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setIsLocationSelected(""); // Set isLocationSelected to empty string when the user selects a location
                      setIsPuneSelected(e.target.value === "Pune");
                    }}
                  >
                    <option value="">Select Parking Location</option>
                    <option value="Pune">Pune</option>
                    {/* Add more location options as needed */}
                  </select>
                </div>
                {/* Select Date */}
                <div className="mb-6">
                  <label className="block text-white text-sm font-semibold mb-2">
                    Date (MM/DD/YYYY)
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-200 border-none rounded py-4 px-6 text-gray-900"
                    min={disablePastDates()}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setIsDateSelected(""); // Set isDateSelected to true when the user selects a date
                    }}
                  />
                </div>
                {/* Start time and End Time */}
                <div className="flex flex-wrap -mx-2 mb-6">
                  <div className="w-full sm:w-1/2 px-2 mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">
                      Start Time
                    </label>
                    <select
                      className="w-full bg-gray-200 border-none rounded py-4 px-6 text-gray-900"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    >
                      <option value="09:00">09:00 AM</option>
                      {/* Add more time options if needed */}
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2 px-2 mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">
                      End Time
                    </label>
                    <select
                      className="w-full bg-gray-200 border-none rounded py-4 px-6 text-gray-900"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    >
                      <option value="21:00">09:00 PM</option>
                      {/* Add more time options if needed */}
                    </select>
                  </div>
                </div>
                {/* Select Vehicle */}
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2">
                    Select vehicle from your registered vehicles
                  </label>
                  <select
                    className="w-full bg-gray-200 border-none rounded py-4 px-6 text-gray-900 relative"
                    value={vehicleRegistered}
                    onChange={(e) => {
                      const selectedVehicle = e.target.value;
                      setVehicleRegistered(selectedVehicle);
                      if (selectedVehicle === "register_vehicle") {
                        navigate("/book");
                      } else {
                        setIsVehicleSelected(""); // Set isVehicleSelected to true when the user selects a vehicle
                      }
                    }}
                  >
                    <option value="">Select Vehicle</option>
                    {licensePlate.map((plate, index) => (
                      <option key={index} value={plate}>
                        {plate}
                      </option>
                    ))}
                    <option disabled>OR</option>
                    <option value="register_vehicle">
                      Register a New Vehicle
                    </option>
                  </select>
                </div>
                {/* Slots left animation */}
                <div className="mb-6 text-center animate-bounce">
                  {date && (
                    <label className="block text-lg font-semibold mt-6">
                      For {date} only{" "}
                      <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
                        {slotsLeft}
                      </span>{" "}
                      Slots left!
                    </label>
                  )}
                </div>
                <div className="mt-5 flex justify-center items-center gap-4">
                <FiAlertCircle className="text-red-600 text-2xl" />
                  <p className="text-red-600">
                    Your Slot will only be Booked once you Pay!
                  </p>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl transition-all duration-300 ease-in-out hover:bg-blue-600 hover:ring-4 hover:ring-sky-300 hover:shadow-2xl shadow-xl"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Dynamic Map render */}
          <div className="w-full mt-8 lg:w-1/2 lg:mt-10">
            {isPuneSelected ? (
              <>
                <h2 className="text-xl font-bold text-center text-white">
                  Map Location
                </h2>
                <div className="border-2 border-gray-500 rounded-xl mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0969250453836!2d73.94819007455423!3d18.569668503020512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3098d3e8983%3A0xdd22c67ea8e569df!2sWagheshwar%20Parking!5e0!3m2!1sen!2sin!4v1695743160160!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0", borderRadius: "0.75rem" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map Location"
                  ></iframe>
                </div>
              </>
            ) : (
              <img
                className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
                src={starman}
                alt="Starman"
              />
            )}
          </div>
        </div>
      </section>

      {/* No. of SLOTS LEFT --->  Pop Up Messages */}
      {showNoSlotsPopup && (
        <div className="fixed inset-0  flex items-start justify-center z-50">
          <div className="bg-gray-950 p-2 px-4 rounded-xl shadow-md flex items-center sm:mt-[96px] mt-20">
            {/* svg here */}
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-red-600 text-sm font-semibold">
                No slots available for today!
              </p>
              <button
                onClick={handleClosePopup}
                className="bg-gray-500 hover:text-yellow-200 hover:ring-2 hover:ring-yellow-400 text-white px-2 rounded-lg hover:bg-gray-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Already Booked --->  Pop Up Messages */}
      {alreadyBookedMessage && (
        <div className="fixed inset-0  flex items-start justify-center z-50">
          <div className="bg-gray-950 p-2 px-4 rounded-xl shadow-md flex items-center sm:mt-[96px] mt-20">
            <IoMdAlert className="text-red-600 text-2xl" />
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-red-600 text-sm font-semibold ml-2">
                {alreadyBookedMessage}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Location not Selected --->  Pop Up Messages */}
      {isLocationSelected && (
        <div className="fixed inset-0  flex items-start justify-center z-50">
          <div className="bg-gray-950 p-2 px-4 rounded-xl shadow-md flex items-center sm:mt-[96px] mt-20">
            <IoLocationSharp className="text-red-600 text-2xl" />
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-yellow-400 text-sm font-semibold ml-2">
                {isLocationSelected}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Date not Selected --->  Pop Up Messages */}

      {isDateSelected && (
        <div className="fixed inset-0  flex items-start justify-center z-50">
          <div className="bg-gray-950 p-2 px-4 rounded-xl shadow-md flex items-center sm:mt-[96px] mt-20">
            <FcCalendar className="text-red-600 text-2xl" />
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-yellow-400 text-sm font-semibold ml-2">
                {isDateSelected}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Vehicle not Selected --->  Pop Up Messages */}

      {isVehicleSelected && (
        <div className="fixed inset-0  flex items-start justify-center z-50">
          <div className="bg-gray-950 p-2 px-4 rounded-xl shadow-md flex items-center sm:mt-[96px] mt-20">
            <FaCar className="text-2xl text-red-600" />
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-yellow-400 text-sm font-semibold ml-2">
                {isVehicleSelected}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Success --->  Pop Up Messages */}
      {successMessage && (
        <div className="fixed inset-0  flex items-start justify-center z-50">
          <div className="bg-gray-950 p-2 px-4 rounded-xl shadow-md flex items-center sm:mt-[96px] mt-20">
            <MdVerified className="text-2xl text-green-600" />
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-green-400 text-sm font-semibold ml-2">
                {successMessage}
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default BookSlotForm;
