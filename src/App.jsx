import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CSSFrameworks from "./pages/CSSFrameworks";
import JSFrameworks from "./pages/JSFrameworks";
import SemesterProject from "./pages/SemesterProject";
import Navbar from "./components/Navbar";
import CursorSpotlight from "./components/CursorSpotlight";

function Layout() {
  return (
    <>
      <CursorSpotlight />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-frameworks" element={<CSSFrameworks />} />
        <Route path="/js-frameworks" element={<JSFrameworks />} />
        <Route path="/semester-project" element={<SemesterProject />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
