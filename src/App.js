import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import WorkExamples from "./components/WorkExamples/WorkExamples";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<WorkExamples />} />
      </Routes>
    </Fragment>
  );
}

export default App;
