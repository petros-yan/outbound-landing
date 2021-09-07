import { Container, Heading, Paragraph, Spacing } from "components/atoms";
import { Section } from "components/templates";

const arr = [
  "Custom outbound must be easier- no more spending 20 minutes per email.",
  "We need help validating the recipient's email before we send.",
  "We need visibility into what our teammates are sending to prospects.",
  "We need to be able to collaborate with our manager and fellow sellers.",
  "We need messaging help- we're professional sellers, not marketers.",
  "Our email product should help us track our deals and move them forward.",
];

const SectionE = ({ data }) => {
  return (
    <Section>
      <Container>
        <Spacing className="pb-12" />
        <div className="text-center">
          <Heading level={2} className="text-white text-32 font-black">
            Superpowers we need as sellers
          </Heading>
        </div>
        <Spacing className="pb-14" />
        <div className="flex flex-wrap justify-between">
          {arr.map((el, i) => {
            return (
              <div key={i} className="h-270px w-405px mb-4 group">
                <div className="w-full h-full p-4 rounded-3xl bg-black group-hover:bg-white">
                  <Paragraph className="text-24 text-white group-hover:text-black">
                    {el}
                  </Paragraph>
                </div>
                <Spacing className="pb-2" />
              </div>
            );
          })}
        </div>
        <Spacing className="pb-30" />
      </Container>
    </Section>
  );
};

export default SectionE;
