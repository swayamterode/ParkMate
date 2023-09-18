import { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";
import { AiFillDelete } from "react-icons/ai";
const VehicleRegistrationOnSignup = () => {
  const [formData, setFormData] = useState({
    license_number: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState("");
  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

  const navigate = useNavigate();

  const isLogged = () => {
    return localStorage.getItem("userId") !== null;
  };

  useEffect(() => {
    if (!isLogged()) {
      navigate("/user_not_loggedin");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/vehicle-registration",
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

  // Function to fetch all registered license plate numbers WORKING 🔥
  const [licensePlate, setLicensePlate] = useState([]);
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

  useEffect(() => {
    fetchLicensePlate();
  }, [userId, licensePlate]);

  // --------------------------------------------------------------- //

  // Function to delete a registered license plate number WORKING 🔥
  const deleteLicensePlate = async (licenseNumber) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.delete(
        `http://localhost:3001/delete-license-plate?userId=${userId}&licenseNumber=${licenseNumber}`
      );

      if (response.data.message === "License Plate Deleted") {
        fetchLicensePlate();
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting license plate:", error);
    }
  };

  return (
    <>
      <Navbar />
      {/* Vehicle Registration✅ */}
      <div className="pt-28 bg-gray-800 flex flex-col justify-center items-center">
        <div className="mt-10 w-5/6 flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-900 text-gray-100">
          <div className="flex justify-center ">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
          </div>
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Vehicle Registration</h1>
            <p className="text-sm text-gray-400">
              Register your new vehicle to your account.
            </p>
          </div>
          <form onSubmit={handleSubmit} noValidate className="space-y-12">
            <div className="space-y-4">
              {/* Fname aur lname side by side */}
              <div>
                <label htmlFor="license_number" className="text-md ml-2">
                  License Plate Number
                </label>
                <input
                  type="text"
                  name="license_number"
                  id="license_number"
                  placeholder="Enter license plate number"
                  className={`w-full px-3 py-2 ml-1 mt-2 border rounded-md uppercase  border-gray-700 bg-gray-900 text-gray-100 `}
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

      {/* Delete the License Number */}
      <div className="pt-10 bg-gray-800 flex flex-col justify-center items-center">
        <div className="mt-10 w-5/6 flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-900 text-gray-100">
          <h2 className="text-2xl font-semibold text-gray-200 flex items-center justify-center mb-7">
            Your Registered Vehicles
          </h2>
          <p className="text-sm text-gray-400 flex items-center justify-center mb-5">
            Delete your registered vehicles from your account.
          </p>
          {licensePlate.length > 0 ? (
            <div>
              {licensePlate.map((licenseNumber) => (
                <p
                  className="flex mb-2 items-center justify-between px-5 py-2 text-sm text-gray-400 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 border-gray-700"
                  key={licenseNumber}
                >
                  <span> {licenseNumber}</span>
                  <AiFillDelete
                    className="hover:text-red-500 text-white cursor-pointer text-lg"
                    onClick={() => deleteLicensePlate(licenseNumber)}
                  ></AiFillDelete>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-200 flex justify-center items-center">
              No registered vehicles found for this user.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VehicleRegistrationOnSignup;
