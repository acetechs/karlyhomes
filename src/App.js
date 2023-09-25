// format

import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";
import Cabinet from "./pages/Cabinet";
import Washbasin from "./pages/Washbasin";
import Wc from "./pages/Wc";
import Cubicles from "./pages/Cubicles";
import Doors from "./pages/Doors";
import Kitchen from "./pages/Kitchen";
import Jacuzzi from "./pages/Jacuzzi";
import Lab from "./pages/Lab";
import Mirror from "./pages/Mirror";
import Oven from "./pages/Oven";
import Pipes from "./pages/Pipes";
import Showers from "./pages/Showers";
import Sinks from "./pages/Sinks";
import Sinktap from "./pages/Sinktap.jsx"
import Taps from "./pages/Taps";
import Waterheater from "./pages/Waterheater";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="footer" element={<Footer />} />
          <Route path="cabinet" element={<Cabinet />} />
          <Route path="cubicles" element={<Cubicles />} />
          <Route path="doors" element={<Doors />} />
          <Route path="jacuzzi" element={<Jacuzzi />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="lab" element={<Lab />} />
          <Route path="mirror" element={<Mirror />} />
          <Route path="oven" element={<Oven />} />
          <Route path="pipes" element={<Pipes />} />
          <Route path="showers" element={<Showers />} />
          <Route path="sinks" element={<Sinks />} />
          <Route path="sinktap" element={<Sinktap />} />
          <Route path="taps" element={<Taps />} />
          <Route path="washbasin" element={<Washbasin />} />
          <Route path="wc" element={<Wc />} />
          <Route path="waterheat" element={<Waterheater />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
