import {
  Container,
  Heading,
  Paragraph,
  Icons,
  Spacing,
} from "components/atoms";
import { Section } from "components/templates";
import { SECTION_COLORS } from "consts";
import classNames from "classnames";
const { WriteFast, Teamwork, ContactBack, FastAndQuality } = Icons;

const styles = {
  spaceing: "3xl:pb-24 lg:pb-14 pb-10",
  headingBox: "lg:text-center 3xl:text-left",
  heading: "3xl:text-36 font-black text-26 text-white",
  text: "text text-white-75 text-24",
  boardsBox: "lg:h-270 xs:mb-4 lg:mb-0",
  board: "h-full p-4 border border-white-25 rounded-3xl bg-black-25",
  boards:
    "lg:grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:gap-4 3xl:flex 3xl:justify-between",
};

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
        <Spacing className={styles.spaceing} />
        <div className={styles.headingBox}>
          <Heading className={styles.heading} level={2}>
            {heading}
          </Heading>
        </div>
        <Spacing className="lg:pb-11 pb-8" />
        <div className={styles.boards}>
          {boards.map((board, i) => {
            return (
              <div
                key={i}
                className={classNames(
                  styles.boardsBox,
                  { "3xl:mr-4": i !== boards.length - 1 },
                  i === 0 || i === boards.length - 1
                    ? "3xl:w-328px"
                    : "3xl:w-270px"
                )}
              >
                <div className={styles.board}>
                  {getIcons(i)}
                  <Spacing className="pb-8" />
                  <Paragraph className={styles.text}>{board}</Paragraph>
                </div>
              </div>
            );
          })}
        </div>
        <Spacing className={styles.spaceing} />
      </Container>
    </Section>
  );
};
