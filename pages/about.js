import { Page } from "components/templates";
import { AboutSections } from "components/organisms";
import { GET_CATEGORIES } from "services";
import client from "services/client";
const { SectionA } = AboutSections;

export default function About(props) {
  return (
    <div>
      <Page>
        <SectionA />
      </Page>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      title: "About",
      categories: data.categories,
    },
  };
}
