import { Paragraph, Spacing, Heading, Icons } from "components/atoms";
import { Section } from "components/templates";
const { Pricing, Members } = Icons;

const SectionA = ({ data }) => {
  return (
    <Section className="relative w-full">
      <Spacing className="pb-28" />
      <div>
        <div className="w-580px m-auto text-center">
          <Heading type={2} className=" font-black text-32 text-white">
            What is outbound
          </Heading>
          <Spacing className="pb-17px" />
          <Paragraph className="text-white-75 text-24">
            Outbound is a SaaS platform that helps you write better sales emails
            by adding a few key ingredients.
          </Paragraph>
        </div>
        <Spacing className="pb-14" />
        <Spacing className="pb-18" />
        <div className="flex justify-center">
          <div className="flex">
            <Pricing className="w-10 h-10" />
            <Spacing className="pl-4" />
            <Paragraph className="text-white-75 text-24 w-285px">
              {
                "Microtemplates to store your team's best messaging and examples."
              }
            </Paragraph>
          </div>
          <Spacing className="pl-11" />
          <div className="flex">
            <Members />

            <Spacing className="pl-4" />
            <Paragraph className="text-white-75 text-24 w-285px">
              Unprecendented visibility into how your teammates are initiating
              and closing deals via email.
            </Paragraph>
          </div>
        </div>
      </div>
      <Spacing className="pb-20" />
    </Section>
  );
};

export default SectionA;
