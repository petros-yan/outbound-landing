import { Paragraph, Spacing, Image, Container } from "components/atoms";
import { Section } from "components/templates";
import { SECTION_COLORS } from "consts";
import writingWays from "public/assets/writingWays.png";
import writingVector from "public/assets/writingVector.png";

const styles = {
  heading: 'flex lg:text-32 text-26 font-medium',
  text: 'text-white-75 lg:text-24 text-17',
  old: { container: 'w-full md:w-50%' },
  new: {
    container: 'relative w-full md:w-50% md:ml-16',
    vector: 'xs:hidden md:block absolute top-10 -left-40',
    hiddenVector: 'xs:hidden md:block invisible',
  }
}

const Old = ({oldHeading, oldText}) => {
  return (
    <div className={styles.old.container}>
      <Spacing className="pb-13" />
      <div className="max-w-580">
        <div 
          className={styles.heading} 
          dangerouslySetInnerHTML={{ __html: oldHeading }}
        />
        <Spacing className="pb-4" />
        <Paragraph className={styles.text}>{oldText}</Paragraph>
      </div>
      <Spacing className="mb-11" />
      <Image src={writingWays} alt="writing ways" />
      <Spacing className="lg:pb-18" />
    </div>
  )
}

const New = ({newHeading, newText}) => {
  return (
    <div className={styles.new.container}>
      <Spacing className="pb-13" />

      <div className={styles.new.vector}>
        <Image src={writingVector} alt="img" />
      </div>
      <div className={styles.new.hiddenVector}>
        <Image src={writingVector} alt="img" />
      </div>

      <div className="max-w-530">
        <div 
          className={styles.heading} 
          dangerouslySetInnerHTML={{ __html: newHeading }}
        />
        <Spacing className="pb-13px" />
        <Paragraph className={styles.text}>{newText}</Paragraph>
      </div>
    </div>
  )
}

export const WritingWays = ({ data }) => {
  const { oldHeading, newHeading, oldText, newText } = data;

  return (
    <Section bg={SECTION_COLORS.DARK_50}>
      <Container className="md:flex">
        <Old oldHeading={oldHeading} oldText={oldText} />
        <New newHeading={newHeading} newText={newText} />
        <Spacing className="pb-18" />
      </Container>
    </Section>
  );
};
