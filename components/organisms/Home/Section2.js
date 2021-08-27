import { Heading, Paragraph, Spacing } from "components/atoms";
import homeSection2Left from "public/assets/homeSection2Left.svg";
import classNames from "classnames";

const Section2 = ({ data }) => {
  const {
    rightSideHeading,
    leftSideHeading,
    rightSideParagraph,
    leftSideParagraph,
  } = data;

  return (
    <section className="lg:flex w-full section2Bg px-4 lg:px-82px">
      <div className="w-full lg:w-50%">
        <Spacing className="pb-13" />
        <div className="max-w-580">
          <div className="flex lg:text-32 text-26 font-medium">
            {leftSideHeading.map((el) => {
              const { title, color } = el;
              return (
                <Heading className={classNames(color, "mr-1")}>{title}</Heading>
              );
            })}
          </div>
          <Spacing className="pb-4" />
          <Paragraph className="text-white-75 lg:text-24 text-17">
            {leftSideParagraph}
          </Paragraph>
        </div>
        <Spacing className="mb-11" />
        <div>
          <img src={homeSection2Left.src} />
        </div>
        <Spacing className="lg:pb-18" />
      </div>

      <div className="w-full lg:w-50% lg:ml-16">
        <Spacing className="pb-13" />
        <div></div>
        <div className="max-w-530">
          <div className="flex lg:text-32 text-26 font-medium">
            {rightSideHeading.map((el) => {
              const { title, color } = el;
              return (
                <Heading className={classNames(color, "mr-1")}>{title}</Heading>
              );
            })}
          </div>
          <Spacing className="pb-13px" />
          <Paragraph className="text-white-75 lg:text-24 text-17">
            {rightSideParagraph}
          </Paragraph>
        </div>
      </div>
      <Spacing className="pb-18" />
    </section>
  );
};

export default Section2;
