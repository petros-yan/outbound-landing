import { Page } from "components/templates";
import { AboutSections } from "components/organisms";
const { SectionA, SectionB, SectionC, SectionD, SectionE, SectionF } =
  AboutSections;

export default function About(props) {
  return (
    <div>
      <Page>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <SectionF />
      </Page>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "About",
    },
  };
}
