import {
  Paragraph,
  Heading,
  Spacing,
  Image,
  Container,
  Icons,
} from "components/atoms";
import { GoogleButton } from "components/molecules";
import { WORDS } from "consts";
import homeSection1 from "public/assets/homeSection1.svg";
const { Ellipse } = Icons;

const Content = ({ data }) => {
  const { heading, paragraph1, paragraph2 } = data;

  return (
    <Container className="lg:flex">
      <div className="lg:w-50% w-full">
        <Spacing className="lg:pb-31 md:pb-18 pb-48px" />
        <div className="max-w-530 md:mr-4">
          <Heading
            className="font-black text-white lg:text-50 text-30"
            level={1}
          >
            {heading}
          </Heading>
          <div className="md:hidden block">
            <Spacing className="pb-5" />
            <Image src={homeSection1} />
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
        <Spacing className="lg:pb-47 md:pb-28 pb-19" />
      </div>

      <div className="lg:w-50% w-full hidden md:block relative">
        <div className="w-full h-full lg:pl-42px md:pl-5">
          <Spacing className="lg:pb-31 md:pb-18 pb-48px" />
          <Image src={homeSection1} />
        </div>
        <div className="md:hidden lg:bl absolute bottom-32px -left-3">
          <Ellipse />
        </div>
      </div>
    </Container>
  );
};

const SectionA = ({ data }) => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-full lg:flex">
        <div className=" lg:w-6/12 w-full h-full bg-dark"></div>
        <div className=" bg-dark lg:w-6/12 w-full h-full md:bg-gradient-betta"></div>
      </div>

      <div className="min-h top-0 left-0 h-full w-full absolute">
        <Content data={data} />
      </div>

      <div className="invisible">
        <Content data={data} />
      </div>
    </section>
  );
};

export default SectionA;
