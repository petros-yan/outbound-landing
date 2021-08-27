import { Paragraph, Heading, Spacing, Icons } from "components/atoms";
import { GoogleButton } from "components/molecules";
import { WORDS } from "consts";
import homeSection1 from "public/assets/homeSection1.svg";
const { Ellipse } = Icons;

const styles = {};

const Section1 = ({ data }) => {
  const { heading, paragraph1, paragraph2 } = data;

  return (
    <section className="lg:flex min-h">
      <div className="lg:px-82px px-4 bg-dark lg:w-50% w-full">
        <Spacing className="lg:pb-31 pb-48px" />
        <div className="max-w-530">
          <Heading
            className="font-black text-white lg:text-50 text-30"
            level={1}
          >
            {heading}
          </Heading>
          <div className="lg:hidden block">
            <Spacing className="pb-5" />
            <img src={homeSection1.src} />
          </div>
          <Spacing className="pb-8" />
          <Paragraph className="text-white-75 lg:text-24 text-17">
            {paragraph1}
          </Paragraph>
          <Spacing className="pb-8" />
          <Paragraph className="text-white-75 lg:text-24 text-17">
            {paragraph2}
          </Paragraph>
          <Spacing className="pb-6" />
          <GoogleButton title={WORDS.SIGNE_UP} />
        </div>
        <Spacing className="lg:pb-47 pb-19" />
      </div>

      <div className="lg:w-50% w-full bg-dark hidden lg:block">
        <div className="w-full bg h-full lg:pr-65px lg:pl-42px px-4">
          <Spacing className="pb-31" />
          <img src={homeSection1.src} />
        </div>
      </div>

      {/* <div className="hidden lg:block relative cursor-pointer">
        <div className="absolute ellipsePossition bottom-328px">
          <Ellipse />
        </div>
      </div> */}
    </section>
  );
};

export default Section1;
