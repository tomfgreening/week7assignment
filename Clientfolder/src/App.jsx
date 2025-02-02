import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import DatabaseEntries from "./components/Databaseentries.jsx";

export default function App() {
  return (
    <>
      <h1> Juicy Jakes </h1>
      <Header />
      <Routes>
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
      </Routes>
      <div>
        <h3>We hope you enjoyed your visit to Juicy Jake's vegan returant! Please use the form below to sign our guestbook.</h3>
      </div>
      <Form />
      <DatabaseEntries />

      <Footer />
    </>
  );
}
