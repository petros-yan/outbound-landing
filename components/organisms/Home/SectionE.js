import {
  Container,
  Heading,
  Paragraph,
  Icons,
  Spacing,
} from "components/atoms";
import { SECTION_COLORS } from "consts";
import { Section } from "components/templates";
import classNames from "classnames";
const { WriteFast, Teamwork, ContactBack, FastAndQuality } = Icons;

const getIcons = (num) => {
  switch (num) {
    case 0:
      return <WriteFast />;
    case 1:
      return <Teamwork />;
    case 2:
      return <ContactBack />;
    case 3:
      return <FastAndQuality />;
  }
};

const SectionE = ({ data }) => {
  const { heading, boards } = data;

  return (
    <Section bg={SECTION_COLORS.BLUE_GRADIENT}>
      <Container>
        <div className="w-full"></div>
        <Spacing className="pb-22" />
        <div className>
          <Heading className="text-36 font-black text-white" level={2}>
            {heading}
          </Heading>
        </div>
        <Spacing className="pb-10" />

        <div className="md:flex flex-wrap justify-between">
          {boards.map((board, i) => {
            return (
              <div
                key={i}
                className={classNames(
                  i === 0 || i === 3 ? "lg:w-328px" : "lg:w-270px"
                )}
              >
                <div className="p-4 border border-white-25 rounded-3xl bg-black-25">
                  {getIcons(i)}
                  <Spacing className="pb-8" />
                  <Paragraph className="text text-white-75 text-24">
                    {board.text}
                  </Paragraph>
                </div>
                {i !== boards.length - 1 ? (
                  <Spacing className="xs:pb-4 md:pb-0" />
                ) : null}
                {i !== boards.length - 1 ? <Spacing className="pr-4" /> : null}
              </div>
            );
          })}
        </div>

        <Spacing className="pb-22" />
      </Container>
    </Section>
  );
};

export default SectionE;
