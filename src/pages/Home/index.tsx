import React from "react";
import { Footer, Hero } from "../../components";
import {
  Career,
  CharterLevels,
  DeCharter,
  DeJourney,
  GetStarted,
  Professionals,
} from "./components";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <DeCharter />
      <CharterLevels />
      <DeJourney />
      <Career />
      <Professionals />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
