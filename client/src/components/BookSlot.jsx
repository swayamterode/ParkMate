import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const BookSlotForm = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [starttime, setStartTime] = useState("09:00");
  const [endtime, setEndTime] = useState("21:00");
  const [vehicleRegistered, setVehicleRegistered] = useState("");
  const [slotsLeft, setSlotsLeft] = useState(10);
  const [showNoSlotsPopup, setShowNoSlotsPopup] = useState(false);

  const disablePastDates = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (slotsLeft > 0) {
      // Your form submission logic here

      setSlotsLeft(slotsLeft - 1);
    } else {
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
        `http://localhost:3001/get-license-plate?userId=${userId}`
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
        <div className="mt-20 max-w-md mx-auto p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl">
          <h1 className="text-center text-4xl font-extrabold text-white mb-6">
            Book a Parking Slot
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white text-sm font-semibold mb-2">
                Location
              </label>
              <select
                className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label className="block text-white text-sm font-semibold mb-2">
                  Start Time
                </label>
                <select
                  className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                  value={starttime}
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
                  value={endtime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  <option value="21:00">09:00 PM</option>
                  {/* Add more time options if needed */}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-semibold mb-2">
                Select vehicle from your registered vehicles
              </label>
              <select
                className="w-full bg-gray-200 border-none rounded py-2 px-4 text-gray-900"
                value={vehicleRegistered}
                onChange={(e) => setVehicleRegistered(e.target.value)}
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
              <label className="block text-white text-lg font-semibold mb-2">
                OR
              </label>
              <Link
                to="/book"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:ring-2 hover:ring-sky-300 hover:shadow-2xl"
              >
                Add New Vehicle
              </Link>
            </div>

            <div className="mb-6 text-center">
              <label className="block text-white text-lg font-semibold mb-2">
                Slots Left
              </label>
              <span className="text-white text-xl">
                {slotsLeft} available slots
              </span>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl hover:bg-blue-600 hover:ring-4 hover:ring-sky-300 hover:shadow-2xl"
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
      <Footer />
    </>
  );
};

export default BookSlotForm;
