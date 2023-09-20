import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VehicleRegistrationOnSignup from "./components/Book";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Error from "./components/Error";
import BookSlotError from "./components/BookSlotError";
import VehicleRegistration from "./components/VehicleRegistration";
import UserNotLoggedIn from "./components/UserNotLoggedIn";
import AlreadyLoggedin from "./components/AlreadyLoggedin";
import AlreadySignedin from "./components/AlreadySignedin";
import BookSlot from "./components/BookSlot";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/book", element: <VehicleRegistrationOnSignup /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/login-before-booking", element: <BookSlotError /> },
  { path: "/vehicle_on_signup", element: <VehicleRegistration /> },
  { path: "/user_not_loggedin", element: <UserNotLoggedIn /> },
  { path: "/login_", element: <AlreadyLoggedin /> },
  { path: "/signup_", element: <AlreadySignedin /> },
  { path: "/slot-booking", element: <BookSlot /> },
  { path: "*", element: <Error /> },
];

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
