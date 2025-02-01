import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <h1> Juicy Jakes </h1>
      <Header />
      <Routes>
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
      </Routes>
      <Form />
      <div>
        <h1>Hello, you!</h1>
      </div>
      <Footer />
    </>
  );
}
