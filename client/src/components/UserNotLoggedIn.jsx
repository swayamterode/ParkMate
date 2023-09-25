import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const UserNotLoggedIn = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="mt-8 text-3xl font-medium uppercase text-red-600">
              Opps! You are not logged in!
            </p>
            <p className="mt-4 text-xl text-gray-400">
              Before you register your vehicle, you need to login!
            </p>
            <div className="flex flex-col items-start mt-6 gap-y-4">
              <Link
                to="/login"
                className="w-1/2 px-7 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto  hover:bg-blue-500 bg-blue-600"
              >
                Take me to Login
              </Link>
              <p className="mt-4 text-xl text-gray-400">
                If you don&apos;t have an account, you can create one!
              </p>
              <Link
                to="/signup"
                className="w-1/2 px-6 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto  hover:bg-blue-500 bg-blue-600"
              >
                Take me to Signup
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:w-1/2 lg:mt-0">
            <img
              className="w-full max-w-lg lg:mx-auto"
              src="/public/login-animate.svg"
              alt="404"
            />
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserNotLoggedIn;
