import { Page } from "components/templates";
import { Plans } from "components/organisms";
import { PRICING_DATA } from "consts";

export default function Pricing(props) {
  const { data } = props;

  return (
    <div>
      <Page>
        <Plans data={data} />
      </Page>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: PRICING_DATA,
    },
  };
}
