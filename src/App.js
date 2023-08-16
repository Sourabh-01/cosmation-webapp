import { Routes, Route } from "react-router-dom"
import Landing from "./components/landingComponent";
import Login from "./components/loginComponent";
import Register from "./components/registerComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </div>
  )
}

export default App