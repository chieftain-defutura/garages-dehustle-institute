import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
