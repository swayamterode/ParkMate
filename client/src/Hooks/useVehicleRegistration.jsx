import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useVehicleRegistration = () => {
    const [formData, setFormData] = useState({
        license_number: "",
      });
      const navigate = useNavigate();
    
      const [showPopup, setShowPopup] = useState(false);
      const [showLoginPopup, setShowLoginPopup] = useState(false);
      const [errors, setErrors] = useState("");
    
      const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Send a POST request to your server
          const response = await axios.post(
            "https://parkmatebackend.onrender.com/vehicle-registration",
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
    
              // Show the redirecting popup
              setShowLoginPopup(true);
    
              setTimeout(() => {
                // Hide the redirecting popup after 3 seconds
                setShowLoginPopup(false);
    
                // Navigate to the "/login" page
                navigate("/login");
              }, 3000); // Hide the redirecting popup after 3 seconds
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
    
      // Scroll to top
      const scrollToTop = () => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      };
    return {showPopup,scrollToTop,showLoginPopup,errors,handleSubmit,handleChange,formData};
}

export default useVehicleRegistration