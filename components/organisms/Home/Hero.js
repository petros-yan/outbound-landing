import { Heading, Spacing, Image, Container, Icons } from "components/atoms";
import { GoogleButton } from "components/molecules";
import { Section } from "components/templates";
import { WORDS, SECTION_COLORS } from "consts";
import hero from "public/assets/hero.png";
import { Fragment } from "react";
const { Ellipse } = Icons;

const styles = {
  section: "relative w-full lg:block hidden",
  layerBox: "absolute top-0 left-0 w-full h-full flex",
  leftLayer: "w-6/12 h-full bg-dark",
  rightLayer: "w-6/12 h-full bg-dark-gradient",
  desktopBox: "top-0 left-0 h-full w-full absolute",
  tabletBox: "md:block xs:hidden lg:hidden",
  mobileBox: "block md:hidden",
  desktop: {
    container: "flex",
    leftBox: "w-50%",
    rightBox: "w-50% relative",
    contentBox: "max-w-530 md:mr-4",
    heading: "font-black text-white text-50",
    text: "text-white-75 text-24",
    imageBox: "w-full h-full pl-42px",
    ellipseBox: "md:hidden lg:block absolute bottom-32px -left-3",
  },
  tablet: {
    contentBox: "max-w-530 m-auto",
    heading: "font-black text-white text-30",
    text: "text-white-75 text-17",
    imageBox: "flex justify-center",
  },
  mobile: {
    heading: "font-black text-white text-30",
    text: "text-white-75 text-17",
  },
};

const Desktop = ({ data }) => {
  const { heading, text } = data;

  return (
    <Container className={styles.desktop.container}>
      <div className={styles.desktop.leftBox}>
        <Spacing className="pb-31" />
        <div className={styles.desktop.contentBox}>
          <Heading className={styles.desktop.heading} level={1}>
            {heading}
          </Heading>
          <Spacing className="pb-8" />
          <div
            className={styles.desktop.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <Spacing className="pb-6" />
          <GoogleButton title={WORDS.CONTINUE_WITH_GOOGLE} />
        </div>
        <Spacing className="pb-47" />
      </div>

      <div className={styles.desktop.rightBox}>
        <div className={styles.desktop.imageBox}>
          <Spacing className="pb-29" />
          <Image src={hero} alt="hero" />
        </div>
        <div className={styles.desktop.ellipseBox}>
          <Ellipse />
        </div>
      </div>
    </Container>
  );
};

const Tablet = ({ data }) => {
  const { heading, text } = data;

  return (
    <Fragment>
      <Section>
        <Container>
          <div className="w-full">
            <Spacing className="pb-12" />
            <div className={styles.tablet.contentBox}>
              <Heading className={styles.tablet.heading} level={1}>
                {heading}
              </Heading>
              <Spacing className="pb-8" />
              <div
                className={styles.tablet.text}
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <Spacing className="pb-6" />
              <GoogleButton title={WORDS.CONTINUE_WITH_GOOGLE} />
            </div>
            <Spacing className="pb-16" />
          </div>
        </Container>
      </Section>
      <Section bg={SECTION_COLORS.DARK_GRADIENT}>
        <Container>
          <Spacing className="pb-16" />
          <div className={styles.tablet.imageBox}>
            <Image src={hero} alt="hero" />
          </div>
          <Spacing className="pb-16" />
        </Container>
      </Section>
    </Fragment>
  );
};

const Mobile = ({ data }) => {
  const { heading, text } = data;

  return (
    <Section>
      <Container>
        <Spacing className="pb-48px" />
        <div className="w-full">
          <div className="max-w-530">
            <Heading className={styles.mobile.heading} level={1}>
              {heading}
            </Heading>
            <Spacing className="pb-5" />
            <Image src={hero} alt="hero" />
            <Spacing className="pb-6" />
            <div
              className={styles.mobile.text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <Spacing className="pb-8" />
            <GoogleButton title={WORDS.CONTINUE_WITH_GOOGLE} />
          </div>
        </div>
        <Spacing className="pb-20" />
      </Container>
    </Section>
  );
};

export const Hero = ({ data }) => {
  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.layerBox}>
          <div className={styles.leftLayer} />
          <div className={styles.rightLayer} />
        </div>
        <div className={styles.desktopBox}>
          <Desktop data={data} />
        </div>
        <div className="invisible">
          <Desktop data={data} />
        </div>
      </section>
      <div className={styles.tabletBox}>
        <Tablet data={data} />
      </div>
      <div className={styles.mobileBox}>
        <Mobile data={data} />
      </div>
    </Fragment>
  );
};
