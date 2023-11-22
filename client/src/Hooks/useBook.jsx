import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useVehicleRegistration = () => {
  const [formData, setFormData] = useState({
    license_number: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState("");
  const userId = localStorage.getItem("userId");
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
        "https://parkmatebackend.onrender.com/vehicle-registration",
        {
          userId: userId,
          license_number: formData.license_number,
        }
      );

      if (response.data.message === "Vehicle Registered") {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 1000);
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

  const [licensePlate, setLicensePlate] = useState([]);
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

  useEffect(() => {
    fetchLicensePlate();
  }, [userId, licensePlate]);

  const deleteLicensePlate = async (licenseNumber) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.delete(
        `https://parkmatebackend.onrender.com/delete-license-plate?userId=${userId}&licenseNumber=${licenseNumber}`
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

  return {
    formData,
    showPopup,
    errors,
    licensePlate,
    handleChange,
    handleSubmit,
    deleteLicensePlate,
  };
};

export default useVehicleRegistration;
