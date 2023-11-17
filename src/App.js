import { Routes, Route, Navigate } from "react-router-dom";
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
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { UserContext } from "./redux/userContext";

function App() {
  const [background, setBackground] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={{ setBackground }}>
        <Header />
        <div
          style={{
            background: `url(${background})`,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Landing />} />
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
