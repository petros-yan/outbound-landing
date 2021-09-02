import { Page } from "components/templates";
import { HomeSections } from "components/organisms";
import { HOME_DATA } from "consts";
import { GET_CATEGORIES } from "services";
import client from "services/client";
const { SectionA, SectionB, SectionC, SectionD, SectionE } = HomeSections;

export default function Home(props) {
  const { sectionA, sectionB, sectionD, sectionE } = props;

  return (
    <Page>
      <SectionA data={sectionA} />
      <SectionB data={sectionB} />
      <SectionC />
      <SectionD data={sectionD} />
      <SectionE data={sectionE} />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      ...HOME_DATA,
      categories: data.categories,
    },
  };
}
