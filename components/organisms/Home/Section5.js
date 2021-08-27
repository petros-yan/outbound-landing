import { Heading, Paragraph, Spacing } from "components/atoms";

const Section5 = ({ data }) => {
  const { heading, boards } = data;

  return (
    <section className="bg-dark ">
      <div className="w-full homeSection4Bg"></div>
      <Spacing className="pb-22" />
      <div className>
        <Heading className="text-36 font-black text-white" level={2}>
          {heading}
        </Heading>
      </div>
      <Spacing className="pb-10" />
      {/* <div className="flex">
        {boards.map((board) => {
          const { text, icon } = board;

          return (
            <div className="p-4 bg-dark-alpha">
              <div className="min-w-230">
                <div>{icon}</div>
                <Spacing className="pb-8" />
                <Paragraph className="text-24 text-white">{text}</Paragraph>
              </div>
            </div>
          );
        })}
      </div> */}
      <Spacing className="pb-22" />
    </section>
  );
};

export default Section5;
