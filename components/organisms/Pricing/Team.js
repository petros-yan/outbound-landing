import { Fragment } from "react";
import { DIVIDER_TYPES, WORDS } from "consts";
import {
  Heading,
  Spacing,
  Icons,
  Paragraph,
  Divider,
  Button,
} from "components/atoms";
const { Done } = Icons;

const styles = {
  container:
    "md:px-38px px-2 lg:w-385px w-full lg:h-635px lg:bg-indigo-700 bg-black-25 lg:rounded-3xl rounded mb-2 lg:mb-0",
  type: "text-white-50 lg:text-24 text-20",
  box: "flex items-center",
  price: "text-white font-bold lg:text-30 text-26",
  priceType: "text-white-50 lg:text-20 text-16",
  line: "h-px bg-white-25",
  button: "w-full py-2 bg-green-500 text-black text-14 rounded-lg",
  icon: "fill-current text-white",
};

export const Team = ({ data }) => {
  const { type, items, price, priceType } = data;
  return (
    <div className={styles.container}>
      <Spacing className="lg:pb-53px pb-4" />
      <Heading level={2} className={styles.type}>
        {type}
      </Heading>
      <Spacing className="pb-1 lg:pb-0" />
      <div className={styles.box}>
        <Heading level={2} className={styles.price}>
          {price}
        </Heading>
        <Spacing className="pl-2" />
        <Paragraph className={styles.priceType}>{`/ ${priceType}`}</Paragraph>
      </div>
      <Spacing className="pb-3" />
      <Divider type={DIVIDER_TYPES.HORIZONTAL} className={styles.line} />
      <Spacing className="pb-3" />
      <Button className={styles.button}>{WORDS.TALK_TO_SALES}</Button>
      <Spacing className="pb-3" />
      <div>
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              <div className={styles.box}>
                <Done className={styles.icon} />
                <Spacing className="pl-3" />
                <div
                  className="text-18"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
              <Spacing className="pb-4" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
