import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./Components/NavBar/Navbar";
import NewProject from "./pages/NewProject/NewProject";
import Deploying from "./pages/Deploying/Deploying";
import { useEffect } from "react";

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
        <Route path="/deploying" element={<Deploying />} />
      </Routes>
    </Router>
  );
}

export default App;
