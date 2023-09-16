import { Routes, Route } from "react-router-dom";
import Landing from "./components/landingComponent";
import Login from "./components/loginComponent";
import Register from "./components/registerComponent";
import AlphaTrials from "./components/alphaTrials";
import Header from "./components/header";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import Disclaimer from "./components/disclaimer";
import Policy from "./components/policy";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/alpha-trials" element={<AlphaTrials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
