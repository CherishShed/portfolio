import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Nav from "./layout/Nav";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Nav />}>
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
