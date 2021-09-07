import {
  Heading,
  Spacing,
  Icons,
  Paragraph,
  Divider,
  Container,
  Button,
  Text,
  Image,
} from "components/atoms";
import { Section } from "components/templates";
import { Fragment, useState } from "react";
import { DIVIDER_TYPES, WORDS } from "consts";
import toggle from "public/assets/toggle.svg";
import classNames from "classnames";
const { Done } = Icons;

const FreeSection = ({ data }) => {
  const { type, list } = data;

  return (
    <div className="px-38px lg:w-385px w-full min-h-580 bg-black-25 lg:rounded-tr-3xl lg:rounded-br-3xl rounded-3xl mb-2 lg:mb-0">
      <Spacing className="pb-16" />
      <Heading level={2} className="text-white text-30">
        {type}
      </Heading>
      <Spacing className="pb-6" />
      <div>
        {list.map((el, i) => {
          return (
            <Fragment key={i}>
              <div className="flex items-center">
                <Done className="fill-current text-indigo-500" />
                <Spacing className="pl-3" />
                <p dangerouslySetInnerHTML={{ __html: el }} />
              </div>
              <Spacing className="pb-4" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const TeamSection = ({ data }) => {
  const { type, list, price, title } = data;
  return (
    <div className="px-38px lg:w-385px w-full min-h-635 lg:bg-indigo-700 bg-black-25 rounded-3xl mb-2 lg:mb-0">
      <Spacing className="pb-11" />
      <Heading level={2} className="text-white-50 text-24">
        {type}
      </Heading>
      <div className="flex items-center">
        <Heading level={2} className="text-white text-30">
          {price}
        </Heading>
        <Spacing className="pl-2" />
        <Paragraph className="text-white-50 text-20">{`/ ${title}`}</Paragraph>
      </div>
      <Spacing className="pb-4" />
      <Divider type={DIVIDER_TYPES.HORIZONTAL} className="h-px bg-white-25" />
      <Spacing className="pb-4" />
      <Button className="w-full py-2 bg-green-500 text-black text-14 rounded-lg">
        {WORDS.TALK_TO_SALES}
      </Button>
      <Spacing className="pb-6" />
      <div>
        {list.map((el, i) => {
          return (
            <Fragment key={i}>
              <div className="flex items-center">
                <Done className="fill-current text-white" />
                <Spacing className="pl-3" />
                <p dangerouslySetInnerHTML={{ __html: el }} />
              </div>
              <Spacing className="pb-4" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const EnterpriceSection = ({ data }) => {
  const { type, list, price, title, subTitle } = data;
  return (
    <div className="px-38px lg:w-385px w-full min-h-580 bg-black-25 lg:rounded-tr-3xl lg:rounded-br-3xl rounded-3xl">
      <Spacing className="pb-32px" />
      <Heading level={2} className="text-white-50 text-24">
        {type}
      </Heading>
      <div className="flex items-center">
        <Heading level={2} className="text-white text-30">
          {price}
        </Heading>
        <Spacing className="pl-2" />
        <Paragraph className="text-white-50 text-20">{`/ ${title}`}</Paragraph>
      </div>
      <Spacing className="pb-22px" />
      <Button className="w-full py-2 bg-green-500 text-black text-14 rounded-lg">
        {WORDS.TALK_TO_SALES}
      </Button>
      <Spacing className="pb-6" />
      <Paragraph className="italic text-14 text-white">{subTitle}</Paragraph>
      <Spacing className="pb-5" />
      <div>
        {list.map((el, i) => {
          return (
            <Fragment key={i}>
              <div className="flex items-center">
                <Done className="fill-current text-indigo-500" />
                <Spacing className="pl-3" />
                <p dangerouslySetInnerHTML={{ __html: el }} />
              </div>
              <Spacing className="pb-4" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const SectionA = ({ data }) => {
  const { sectionA, sectionB, sectionC } = data;
  const [isMounthly, setIsMounthly] = useState(true);

  const onToggle = (event) => {
    const {
      target: { checked },
    } = event;
    setIsMounthly(!checked);
  };

  return (
    <Section>
      <Container>
        <Spacing className="pb-7" />
        <div className="flex items-center justify-center">
          <Text
            className={classNames("italic p-1 rounded-md text-16", {
              ["text-indigo-500 bg-white"]: isMounthly,
              ["text-white-50"]: !isMounthly,
            })}
          >
            {WORDS.MONTHLY}
          </Text>
          <Spacing className="pl-3" />
          <div className="flex items-center justify-center">
            <label
              htmlFor="toogle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  id="toogle"
                  type="checkbox"
                  onChange={onToggle}
                  className="sr-only"
                />
                <div className="w-6 h-12px bg-indigo-500 rounded-full"></div>
                <div
                  className={classNames("absolute -left-1 -top-1 transition", {
                    ["translateX"]: !isMounthly,
                  })}
                >
                  <div className=" border-5 rounded-full border-white">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>
                </div>
              </div>
            </label>
          </div>
          <Spacing className="pl-3" />
          <Text
            className={classNames("italic p-1 rounded-md text-16", {
              ["text-indigo-500 bg-white"]: !isMounthly,
              ["text-white-50"]: isMounthly,
            })}
          >
            {WORDS.ANNUALLY}
          </Text>
        </div>
        <Spacing className="pb-6" />
        <div className="lg:flex justify-center items-center">
          <FreeSection data={sectionA} />
          <TeamSection data={sectionB} />
          <EnterpriceSection data={sectionC} />
        </div>
        <Spacing className="pb-4" />
      </Container>
      <Spacing className="pb-12" />
    </Section>
  );
};

export default SectionA;
