import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/book" element={<Book />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
