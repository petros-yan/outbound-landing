import { WithoutFooterPage } from "components/templates";
import { PricingSections } from "components/organisms";
import { GET_CATEGORIES } from "services";
import { PRICING_DATA } from "consts";
import client from "services/client";
const { SectionA } = PricingSections;

export default function Pricing(props) {
  const { data } = props;

  return (
    <div>
      <WithoutFooterPage>
        <SectionA data={data} />
      </WithoutFooterPage>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      data: PRICING_DATA,
      categories: data.categories,
    },
  };
}
