import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";


export default function App() {
  return (
    <Routes>
      <Route element={<About />} path={"/about"} />
      </Routes>
      <div>
        <h1>Hello, you!</h1>
      </div>
  );
}