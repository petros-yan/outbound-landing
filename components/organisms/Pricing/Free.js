import { Fragment } from "react";
import { Heading, Spacing, Icons } from "components/atoms";
const { Done } = Icons;

const styles = {
  container:
    "md:px-38px px-2 lg:w-385px w-full lg:h-580px bg-black-25 lg:rounded-tl-3xl lg:rounded-bl-3xl rounded mb-2 lg:mb-0",
  type: "text-white font-bold lg:text-30 text-26",
  itemsBox: "max-h-351 overflow-y-auto",
  itemBox: "flex items-center",
  icon: "fill-current text-indigo-500",
};

export const Free = ({ data }) => {
  const { type, items } = data;

  return (
    <div className={styles.container}>
      <Spacing className="lg:pb-78px pb-4" />
      <Heading level={2} className={styles.type}>
        {type}
      </Heading>
      <Spacing className="pb-28px" />
      <div className={styles.itemsBox}>
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              <div className={styles.itemBox}>
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
