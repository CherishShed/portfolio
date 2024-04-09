import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Nav from "./layout/Nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Nav />}>
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
