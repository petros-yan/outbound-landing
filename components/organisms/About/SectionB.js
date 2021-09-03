import { Container, Heading, Spacing, Image } from "components/atoms";
import { Section } from "components/templates";
import ReactPlayer from "react-player";
import play from "public/assets/play.svg";

const SectionB = ({ data }) => {
  return (
    <Section bgType="root">
      <Container className="text-center">
        <Spacing className="pb-12" />
        <Heading className="text-white font-black text-32">
          This is what we’re building
        </Heading>
        <Spacing className="pb-8" />
        <div className="flex justify-center">
          <ReactPlayer
            width={895}
            height={530}
            url="https://firebasestorage.googleapis.com/v0/b/armath-send.appspot.com/o/pexels-yan-krukov-8865924.mp4?alt=media&token=f6c7ac5d-71ff-426b-9401-ef90fc171b22"
            playIcon={
              <div className="bg-black w-895px h-106 rounded-40 flex items-center justify-center">
                <Image src={play} />
              </div>
            }
            light={true}
            autoplay={true}
            controls
          />
        </div>
        <Spacing className="pb-22" />
      </Container>
    </Section>
  );
};

export default SectionB;
