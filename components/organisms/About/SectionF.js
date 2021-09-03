import { Container, Heading, Spacing } from "components/atoms";
import { GoogleButton } from "components/molecules";
import { Section } from "components/templates";
import { WORDS } from "consts";

const SectionF = ({ data }) => {
  return (
    <Section bgType="gradient">
      <Container>
        <Spacing className="pb-12" />
        <div className="text-center">
          <Heading className="text-white text-32 font-black">
            Want to try it?
          </Heading>
          <Spacing className="pb-6" />
          <GoogleButton title={WORDS.SIGNE_UP} />
        </div>
        <Spacing className="pb-31" />
      </Container>
    </Section>
  );
};

export default SectionF;
