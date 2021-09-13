import { Page } from "components/templates";
import { Home } from "components/organisms";
import { HOME_DATA } from "consts";
// import { GET_CATEGORIES } from "services";
// import client from "services/client";

export default function HomePage({data}) {
  return (
    <Page>
      <Home data={data} />
    </Page>
  );
}

export async function getServerSideProps() {
  // const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      data: HOME_DATA,
    },
  };
}
