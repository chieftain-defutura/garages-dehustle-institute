import React from "react";
import { Footer, Hero } from "../../components";
import {
  Career,
  CharterLevels,
  DeCharter,
  DeJourney,
  GetStarted,
} from "./components";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <DeCharter />
      <CharterLevels />
      <DeJourney />
      <Career />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
