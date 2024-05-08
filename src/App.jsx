import React, { useState } from "react";
import "./App.css";
//import Calendar from "./components/calendar/Calendar";
//import Cards from "./components/cards/cards";
//import Curriculum from "./components/curriculum/curriculum";
//import Eligibility from "./components/eligibility/Eligibility";
//import Experience from "./components/experience/Experience";
import Header from "./components/Header/header";
// import Hero from "./components/Hero/hero";
// import Select from "./components/selectlang/Select";
//import Businessunschool from "./components/JoinUnschool/businessunschool";
//import Lucky from "./components/lucky/Lucky";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <Header toggleLanguage={toggleLanguage} language={language} />

      {/* <Select toggleLanguage={toggleLanguage} language={language} /> */}
      {/* <Businessunschool />
      <Curriculum />
      <Experience />
      <Cards />
      <Lucky />
      <Eligibility />
      <Calendar /> */}
    </>
  );
}

export default App;
