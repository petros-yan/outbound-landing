import {
  Container,
  Heading,
  Paragraph,
  Spacing,
  Image,
} from "components/atoms";
import { Section } from "components/templates";
import ourvision from "public/assets/ourvision.svg";

const SectionD = ({ data }) => {
  return (
    <Section bgType="gradient">
      <Container>
        <Spacing className="pb-21" />
        <div className="text-center">
          <Heading level={2} className="text-white text-32 font-black">
            Our vision
          </Heading>
          <Spacing className="pb-1" />
          <Paragraph className="text-white-75 text-24">
            What if your sales inbox and outbox were built specifically for
            selling?
          </Paragraph>
        </div>
        <Spacing className="pb-2" />
        <div className="flex items-center">
          <div>
            <Image src={ourvision} />
          </div>
          <Spacing className="pl-30" />
          <div>
            <Paragraph className="text-white-75 text-24">
              We (as sellers) have highly specialized needs to make sure we’re
              building pipeline, closing deals, and learning from our teammates.
            </Paragraph>
            <Spacing className="pb-5" />
            <Paragraph className="text-white-75 text-24">
              But for some reason, we use the exact same email tool
              professionally that we use in our personal lives.
            </Paragraph>
            <Spacing className="pb-5" />
            <Paragraph className="text-white-75 text-24">
              Isn't that kind of insane?
            </Paragraph>
          </div>
        </div>
        <Spacing className="pb-20" />
      </Container>
    </Section>
  );
};

export default SectionD;
