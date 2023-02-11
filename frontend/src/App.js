import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./Components/NavBar/Navbar";
import NewProject from "./pages/NewProject/NewProject";
import Deploying from "./pages/Deploying/Deploying";
import { useEffect } from "react";
import SelectConfig from "./pages/SelectConfig/SelectConfig";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import VerifyLogin from "./utils/VerifyLogin";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <Router>
      {/* top nav */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/deploying/:id" element={<Deploying />} />
        <Route path="/selectconfig/:id" element={<SelectConfig />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verifyLogin" element={<VerifyLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
