import {
  Container,
  Heading,
  Paragraph,
  Icons,
  Spacing,
} from "components/atoms";
import { Section } from "components/templates";
import { Fragment } from "react";
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
    <Section bgType="gradient">
      <Container>
        <div className="w-full"></div>
        <Spacing className="pb-22" />
        <div className>
          <Heading className="text-36 font-black text-white" level={2}>
            {heading}
          </Heading>
        </div>
        <Spacing className="pb-10" />

        <div className="md:flex">
          {boards.map((board, i) => {
            return (
              <Fragment key={i}>
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
              </Fragment>
            );
          })}
        </div>

        <Spacing className="pb-22" />
      </Container>
    </Section>
  );
};

export default SectionE;
