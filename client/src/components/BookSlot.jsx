import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { FaCar } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import Navbar from "./Navbar";
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
        setSuccessMessage("Slot Booked Successfully");
        setTimeout(() => {
          setSuccessMessage(""); // Clear the message after a delay
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

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-t from-blue-900 to-cyan-900 min-h-screen py-12 sm:py-20 px-5">
        <div className="shadow-lg mt-20 max-w-md mx-auto p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl">
          <h1 className="text-center text-4xl font-extrabold text-white mb-6">
            Book a Parking Slot
          </h1>

          {/* Form Starts from here! */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white text-sm font-semibold mb-2">
                Location
              </label>
              <select
                className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setIsLocationSelected(""); // Set isLocationSelected to empty string when user selects a location
                }}
              >
                <option value="">Select Parking Location</option>
                <option value="Pune">Pune</option>
                {/* Add more location options as needed */}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-semibold mb-2">
                Date (MM/DD/YYYY)
              </label>
              <input
                type="date"
                className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                min={disablePastDates()}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setIsDateSelected(""); // Set isDateSelected to true when user selects a date
                }}
              />
            </div>

            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label className="block text-white text-sm font-semibold mb-2">
                  Start Time
                </label>
                <select
                  className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
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
                  className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  <option value="21:00">09:00 PM</option>
                  {/* Add more time options if needed */}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2">
                Select vehicle from your registered vehicles
              </label>
              <select
                className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                value={vehicleRegistered}
                onChange={(e) => {
                  setVehicleRegistered(e.target.value);
                  setIsVehicleSelected(""); // Set isVehicleSelected to true when user selects a vehicle
                }}
              >
                <option value="">Select Vehicle</option>
                {licensePlate.map((plate, index) => (
                  <option key={index} value={plate}>
                    {plate}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6 text-center">
              <label className="block text-white text-lg font-semibold mb-4">
                OR
              </label>
              <Link
                to="/book"
                className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded hover:bg-blue-600 hover:ring-2 hover:ring-sky-300 hover:shadow-2xl"
              >
                Register New Vehicle
              </Link>
            </div>

            <div className="mb-6 text-center">
              {date && (
                <label className="block text-white text-lg font-semibold mb-2">
                  For {date} only{" "}
                  <span className="text-red-500"> {slotsLeft} </span>Slots left!
                </label>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl hover:bg-blue-600 hover:ring-4 hover:ring-sky-300 hover:shadow-2xl shadow-xl"
              >
                Book Slot
              </button>
            </div>
          </form>
        </div>
      </div>
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
