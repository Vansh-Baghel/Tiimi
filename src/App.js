import "./App.css";
import Jobs from "./Jobs/Jobs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Candidates from "./Cadidates/Candidates";
import Myreferrals from "./My Referrals/Myreferrals";
import CareerSite from "./Career Site/CareerSite";
import Error from "./Error.js";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/Tiimi" element={<Jobs />} />
            <Route path="/Candidates" element={<Candidates />} />
            <Route path="/Myreferrals" element={<Myreferrals />} />
            <Route path="/CareerSite" element={<CareerSite />} />
            <Route path="/*" element={<Error />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
