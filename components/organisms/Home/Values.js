import { Container, Heading, Paragraph, Icons, Spacing } from "components/atoms";
import { Section } from "components/templates";
import { SECTION_COLORS } from "consts";
import classNames from "classnames";
const { WriteFast, Teamwork, ContactBack, FastAndQuality } = Icons;

const styles = {

}

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

export const Values = ({ data }) => {
  const { heading, boards } = data;

  return (
    <Section bg={SECTION_COLORS.BLUE_GRADIENT}>
      <Container>
        <div className="w-full"></div>
        <Spacing className="pb-22" />
        <div>
          <Heading className="text-36 font-black text-white" level={2}>
            {heading}
          </Heading>
        </div>
        <Spacing className="pb-10" />

        <div className="grid 3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1">
          {boards.map((board, i) => {
            return (
              <div 
                key={i} 
                className={
                  classNames(
                    i === 0 || i === boards.length - 1 ? '3xl:w-328px' : '3xl:w-270px',
                    {'3xl:mr-4': i !== boards.length - 1}
                  )
                }>
                <div className="p-4 border border-white-25 rounded-3xl bg-black-25">
                  {getIcons(i)}
                  <Spacing className="pb-8" />
                  <Paragraph className="text text-white-75 text-24">
                    {board}
                  </Paragraph>
                </div>
              </div>
            );
          })}
        </div>

        <Spacing className="pb-22" />
      </Container>
    </Section>
  );
};
