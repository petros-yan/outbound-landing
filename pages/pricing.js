import { Page } from "components/templates";
import { GET_CATEGORIES } from "services";
import client from "services/client";

export default function Pricing(props) {
  const { title } = props;

  return (
    <div>
      <Page>
        <h2>{title}</h2>
      </Page>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      title: "Pricing",
      categories: data.categories,
    },
  };
}
