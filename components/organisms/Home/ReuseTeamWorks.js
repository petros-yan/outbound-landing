import { Fragment } from "react";
import { Heading, Spacing, Image, Container, Paragraph } from "components/atoms";
import { Section } from "components/templates";
import { SECTION_COLORS } from "consts";
import reuseTeamWorks from "public/assets/reuseTeamWorks.png";
import users from "public/assets/users.svg";
import email from "public/assets/email.svg";

const styles = {
  container: 'md:block lg:hidden xs:w-328px md:w-444px m-auto',
  headingBox: 'max-w-480 m-auto text-center',
  heading: 'text-white text-32 font-medium',
  teamworkImageBox: 'hidden lg:flex justify-center',
  paragraphBox: 'flex items-center',
  doth: 'w-6px h-6px rounded-full bg-white',
  paragraph: 'text-white text-15 opacity-80',
}

export const ReuseTeamWorks = ({ data }) => {
  const { heading, paragraphs } = data;

  return (
    <Section bg={SECTION_COLORS.DARK_100}>
      <Container>
        <Spacing className="pb-11" />
        <div className={styles.headingBox}>
          <Heading className={styles.heading} level={2}>
            {heading}
          </Heading>
        </div>
        <Spacing className="pb-38px" />
        <div className={styles.teamworkImageBox}>
          <Image src={reuseTeamWorks} alt="reuse team works" className="m-0" />
        </div>

        <div className={styles.container}>
          <div className="text-center">
            <Image alt="users" src={users} />
            <Spacing className="pb-8" />
            <Image alt="email" src={email} />
            <Spacing className="pb-13" />
          </div>
          <div>
            {paragraphs.map((paragraph, i) => {
              return (
                <Fragment key={i}>
                  <div className={styles.paragraphBox}>
                    <div className={styles.doth}></div>
                    <Spacing className="pr-2" />
                    <Paragraph className={styles.paragraph}>
                      {paragraph}
                    </Paragraph>
                  </div>
                  <Spacing className="pb-2" />
                </Fragment>
              );
            })}
          </div>
        </div>

        <Spacing className="pb-14" />
      </Container>
    </Section>
  );
};
