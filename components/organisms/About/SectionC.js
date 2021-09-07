import { Container, Heading, Paragraph, Spacing } from "components/atoms";
import { Section } from "components/templates";

const SectionC = ({ data }) => {
  return (
    <Section>
      <Container>
        <Spacing className="pb-12" />
        <div className="text-center">
          <Heading level={2} className="text-white text-32 font-black">
            How does it work?
          </Heading>
          <Spacing className="pb-3" />
          <Paragraph className="text-white-75 text-24">
            {"Outbound is a repository of your team's best writing."}
          </Paragraph>
        </div>
        <Spacing className="pb-23" />
        <div>
          <div>
            <div></div>
            <Spacing className="pb-11" />
            <div></div>
          </div>
          <div></div>
        </div>
        <Spacing className="pb-25" />
        <div></div>
        <Spacing className="pb-25" />
      </Container>
    </Section>
  );
};

export default SectionC;
