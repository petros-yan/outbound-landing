import { Page } from "components/templates";
import { AboutSections } from "components/organisms";
import { GET_CATEGORIES } from "services";
import client from "services/client";
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
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      categories: data.categories,
    },
  };
}
