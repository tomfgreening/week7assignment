import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <>
      <h1> Project </h1>
      <Header />
      <Routes>
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
      </Routes>
      <div>
        <h1>Hello, you!</h1>
      </div>
      <Footer />
    </>
  );
}
