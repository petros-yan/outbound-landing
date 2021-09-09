import { Fragment } from "react";
import { Heading, Spacing, Icons, Paragraph, Button } from "components/atoms";
import { WORDS } from "consts";
const { Done } = Icons;

const styles = {
  container:
    "md:px-38px px-2 lg:w-385px w-full lg:h-580px bg-black-25 lg:rounded-tr-3xl lg:rounded-br-3xl rounded",
  type: "text-white-50 lg:text-24 text-20",
  box: "flex items-center",
  price: "text-white font-bold lg:text-30 text-26",
  priceType: "text-white-50 lg:text-20 text-16",
  button: "w-full py-2 bg-green-500 text-black text-14 rounded-lg",
  title: "italic text-14 text-white truncate",
  itemsBox: "max-h-351 overflow-y-auto",
  icon: "fill-current text-indigo-500",
};

export const Enterprice = ({ data }) => {
  const { type, items, price, priceType, title } = data;
  return (
    <div className={styles.container}>
      <Spacing className="lg:pb-33px pb-4" />
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
      <Spacing className="pb-23px" />
      <Button className={styles.button}>{WORDS.TALK_TO_SALES}</Button>
      <Spacing className="pb-4" />
      <Paragraph className={styles.title}>{title}</Paragraph>
      <Spacing className="pb-23px" />
      <div className={styles.itemsBox}>
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              <div className={styles.box}>
                <Done className={styles.icon} />
                <Spacing className="pl-3" />
                <div
                  className="text-16"
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
