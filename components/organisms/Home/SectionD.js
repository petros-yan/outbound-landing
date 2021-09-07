import {
  Heading,
  Spacing,
  Image,
  Container,
  Paragraph,
} from "components/atoms";
import { Section } from "components/templates";
import homeSection4 from "public/assets/homeSection4.png";
import users from "public/assets/users.svg";
import email from "public/assets/email.svg";
import { Fragment } from "react";

const SectionD = ({ data }) => {
  const { heading, paragraphs } = data;

  return (
    <Section bgType="root">
      <Container>
        <Spacing className="pb-11" />
        <div className="max-w-480 m-auto text-center">
          <Heading className="text-white text-32 font-medium" level={2}>
            {heading}
          </Heading>
        </div>
        <Spacing className="pb-38px" />
        <div className="hidden lg:flex justify-center">
          <Image src={homeSection4} alt="img" className="m-0" />
        </div>

        <div className="md:block lg:hidden xs:w-328px md:w-444px m-auto">
          <div className="text-center">
            <Image alt="img" src={users} />
            <Spacing className="pb-8" />
            <Image alt="img" src={email} />
            <Spacing className="pb-13" />
          </div>
          <div>
            {paragraphs.map((paragraph, i) => {
              return (
                <Fragment key={i}>
                  <div className="flex items-center">
                    <div className="w-6px h-6px rounded-full bg-white"></div>
                    <Spacing className="pr-2" />
                    <Paragraph className="text-white text-15 opacity-80">
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

export default SectionD;
