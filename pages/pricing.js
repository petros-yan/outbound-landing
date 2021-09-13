import { Page } from "components/templates";
import { Pricing } from "components/organisms";
import { PRICING_DATA } from "consts";

export default function PricingPage({data}) {
  return (
    <Page>
      <Pricing data={data} />
    </Page>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: PRICING_DATA,
    },
  };
}
