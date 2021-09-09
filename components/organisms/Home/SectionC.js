import { Container, Heading, Paragraph, Spacing, Text } from "components/atoms";
import { Section } from "components/templates";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Step1 = () => {
  return (
    <div className="flex justify-between">
      <div className="w-580px"></div>
      <div>
        <Heading level={2} className="text-white text-32 font-black">
          Customize <Text className="text-yellow-500">the reason</Text> for your
          outreach
        </Heading>
        <Spacing className="pb-8" />
        <Paragraph className="text-white-75 text-24">
          We will research your prospect so that you can cite a specific event,
          article, or observation in your outreach. Customized reasons for
          reaching out drive higher response rates.
        </Paragraph>
      </div>
    </div>
  );
};
const Step2 = () => {
  return (
    <div className="flex justify-between">
      <div className="w-580px"></div>
      <div>
        <Heading level={2} className="text-white text-32 font-black">
          Match <Text className="text-blue-500">the value </Text> of your
          product to your specific prospect
        </Heading>
        <Spacing className="pb-8" />
        <Paragraph className="text-white-75 text-24">
          No more wondering what to say in an outbound email. Saved
          microtemplates make it easy to match messaging for the right product,
          use case, buyer persona and value prop to the right prospect.
        </Paragraph>
      </div>
    </div>
  );
};
const Step3 = () => {
  return (
    <div className="flex justify-between">
      <div className="w-580px"></div>
      <div>
        <Heading level={2} className="text-white text-32 font-black">
          End with <Text className="text-pink-500">a question</Text>
        </Heading>
        <Spacing className="pb-8" />
        <Paragraph className="text-white-75 text-24">
          We will research your prospect so that you can cite a specific event,
          article, or observation in your outreach. Customized reasons for
          reaching out drive higher response rates.
        </Paragraph>
      </div>
    </div>
  );
};
const Step4 = () => {
  return (
    <div className="flex justify-between">
      <div className="w-580px"></div>
      <div>
        <Heading level={2} className="text-white text-32 font-black">
          Send your <Text className="text-blue-700">email,</Text> Learn from
          your teammates.
        </Heading>
        <Spacing className="pb-8" />
        <Paragraph className="text-white-75 text-24">
          {`Each email you write makes your next outbound, and your teammates'
          next outbound, better. Build a repository of what actually works.`}
        </Paragraph>
      </div>
    </div>
  );
};

const SectionC = () => {
  return (
    <Section>
      <Container className="w-full">
        <Spacing className="pb-30" />
        <Swiper className="mySwiper">
          <SwiperSlide>
            <Step1 />
          </SwiperSlide>
          <SwiperSlide>
            <Step2 />
          </SwiperSlide>
          <SwiperSlide>
            <Step3 />
          </SwiperSlide>
          <SwiperSlide>
            <Step4 />
          </SwiperSlide>
        </Swiper>
        <Spacing className="pb-30" />
      </Container>
    </Section>
  );
};

export default SectionC;
