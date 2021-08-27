import { Page } from "components/templates";
import { HomeSections } from "components/organisms";
import { HOME_MOCK_DATA } from "consts";
import { GET_CATEGORIES } from "services";
import client from "services/client";
const { Section1, Section2, Section3, Section4, Section5 } = HomeSections;

export default function Home(props) {
  const { section1, section2, section4, section5 } = props;

  return (
    <Page>
      <Section1 data={section1} />
      <Section2 data={section2} />
      <Section3 />
      <Section4 data={section4} />
      <Section5 data={section5} />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      ...HOME_MOCK_DATA,
      categories: data.categories,
    },
  };
}
