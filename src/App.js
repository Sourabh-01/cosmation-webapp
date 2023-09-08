import { Routes, Route } from "react-router-dom";
import Landing from "./components/landingComponent";
import Login from "./components/loginComponent";
import Register from "./components/registerComponent";
import AlphaTrials from "./components/alphaTrials";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/alpha-trials" element={<AlphaTrials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
