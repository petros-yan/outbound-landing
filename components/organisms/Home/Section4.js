import { Heading, Spacing } from "components/atoms";
import homeSection4 from "public/assets/homeSection4.png";

const Section4 = ({ data }) => {
  const { heading, paragraphs } = data;

  return (
    <section className="section2Bg text-center">
      <Spacing className="pb-11" />
      <div className="max-w-480 m-auto">
        <Heading className="text-white text-32 font-medium" level={2}>
          {heading}
        </Heading>
      </div>
      <Spacing className="pb-38px" />
      <div className="flex justify-center">
        <img src={homeSection4.src} className="m-0" />
      </div>
      <Spacing className="pb-14" />
    </section>
  );
};

export default Section4;
