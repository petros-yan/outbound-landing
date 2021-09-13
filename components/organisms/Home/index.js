import { Fragment } from "react";
import { Hero } from "./Hero";
import { WritingWays } from "./WritingWays";
import { Steps } from "./Steps";
import { ReuseTeamWorks } from "./ReuseTeamWorks";
import { Values } from "./Values";

const Home = ({ data }) => {
  const { hero, writingWays, reuseTeamWorks, values } = data;
  return (
    <Fragment>
      <Hero data={hero} />
      <WritingWays data={writingWays} />
      <Steps />
      <ReuseTeamWorks data={reuseTeamWorks} />
      <Values data={values} />
    </Fragment>
  );
};

export default Home;
