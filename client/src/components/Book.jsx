import { BsFillCheckCircleFill } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiFillDelete } from "react-icons/ai";
import useBook from "../Hooks/useBook";
import logo from "../assets/mainLogo.svg";
const VehicleRegistrationOnSignup = () => {
  const {
    formData,
    showPopup,
    errors,
    licensePlate,
    handleChange,
    handleSubmit,
    deleteLicensePlate,
  } = useBook();

  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row justify-center">
          {/* Vehicle Registration✅ */}
          <div className="pt-28 flex flex-col justify-center items-center mb-10 lg:mb-20">
            <div className="mt-5 w-5/6 flex border-black flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-900 text-gray-100">
              <div className="flex justify-center ">
                <img src={logo} alt="logo" className="h-12" />
              </div>
              <div className="mb-8 text-center">
                <h1 className="my-3 text-2xl md:text-4xl font-bold">
                  Vehicle Registration
                </h1>
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
                      <p className="text-red-500 text-sm font-semibold">
                        {errors}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Delete the License Number */}
          <div className="pt-5 flex flex-col justify-center items-center pb-32 ">
            <div className="mt-5 md:mt-40 w-5/6 flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-800 text-gray-100 text-center">
              <h2 className="text-2xl font-semibold text-gray-200 mb-7">
                Your Registered Vehicles
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                Delete your registered vehicles from your account.
              </p>
              {licensePlate.length > 0 ? (
                <div>
                  {licensePlate.map((licenseNumber) => (
                    <p
                      className="flex mb-2 items-center justify-center px-5 py-2 text-sm text-gray-400 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 border-gray-700"
                      key={licenseNumber}
                    >
                      <span>{licenseNumber}</span>
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

          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 "
            aria-hidden="true"
          >
            <div
              className="aspect-[1100/678] w-[90.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute left-1/2 bottom-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 "
            aria-hidden="true"
          >
            <div
              className="aspect-[1100/678] w-[90.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VehicleRegistrationOnSignup;
