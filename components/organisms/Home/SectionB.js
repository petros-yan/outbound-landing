import {
  Heading,
  Paragraph,
  Spacing,
  Image,
  Container,
} from "components/atoms";
import { SECTION_COLORS } from "consts";
import homeSection2Left from "public/assets/homeSection2Left.svg";
import classNames from "classnames";
import { Section } from "components/templates";
import vector from "public/assets/vector.svg";

const SectionB = ({ data }) => {
  const {
    rightSideHeading,
    leftSideHeading,
    rightSideParagraph,
    leftSideParagraph,
  } = data;

  return (
    <Section bg={SECTION_COLORS.DARK_50}>
      <Container className="md:flex">
        <div className="w-full md:w-50%">
          <Spacing className="pb-13" />
          <div className="max-w-580">
            <div className="flex lg:text-32 text-26 font-medium">
              {leftSideHeading.map((el, i) => {
                const { title, color } = el;
                return (
                  <div key={i}>
                    <Heading className={classNames(color, "mr-1")}>
                      {title}
                    </Heading>
                  </div>
                );
              })}
            </div>
            <Spacing className="pb-4" />
            <Paragraph className="text-white-75 lg:text-24 text-17">
              {leftSideParagraph}
            </Paragraph>
          </div>
          <Spacing className="mb-11" />
          <div>
            <Image src={homeSection2Left} alt="img" />
          </div>
          <Spacing className="lg:pb-18" />
        </div>

        <div className="relative w-full md:w-50% md:ml-16">
          <Spacing className="pb-13" />

          <div className="xs:hidden md:block absolute top-10 -left-40">
            <Image src={vector} alt="img" />
          </div>
          <div className="xs:hidden md:block invisible">
            <Image src={vector} alt="img" />
          </div>

          <div className="max-w-530">
            <div className="flex lg:text-32 text-26 font-medium">
              {rightSideHeading.map((el, i) => {
                const { title, color } = el;
                return (
                  <div key={i}>
                    <Heading className={classNames(color, "mr-1")}>
                      {title}
                    </Heading>
                  </div>
                );
              })}
            </div>
            <Spacing className="pb-13px" />
            <Paragraph className="text-white-75 lg:text-24 text-17">
              {rightSideParagraph}
            </Paragraph>
          </div>
        </div>
        <Spacing className="pb-18" />
      </Container>
    </Section>
  );
};

export default SectionB;
