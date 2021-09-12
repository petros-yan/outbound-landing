import { useState } from "react";
import { Spacing, Container, Text } from "components/atoms";
import { Section } from "components/templates";
import { Enterprice } from "./Enterprice";
import { Free } from "./Free";
import { Team } from "./Team";
import { WORDS } from "consts";
import classNames from "classnames";

const styles = {
  section: "flex-1",
  plansBox: "lg:flex justify-center items-center",
  box: "flex items-center justify-center",
  text: "italic p-1 rounded-md text-16",
  indigoText: "text-indigo-500 bg-white",
  whiteText: "text-white-50",
  label: "flex items-center cursor-pointer",
  labelBox: "relative",
  line: "w-6 h-12px bg-indigo-500 rounded-full",
  roundBox: "absolute -left-1 -top-1 transition",
  round: "w-2 h-2 rounded-full bg-indigo-500",
  roundBorder: "border-5 rounded-full border-white",
};

const Pricing = ({ data }) => {
  const { free, team, enterprise } = data;
  const [isMounthly, setIsMounthly] = useState(true);

  return (
    <Section className={styles.section}>
      <Container>
        <Spacing className="pb-7" />
        <div className={styles.box}>
          <Text
            className={classNames(styles.text, {
              [styles.indigoText]: isMounthly,
              [styles.whiteText]: !isMounthly,
            })}
          >
            {WORDS.MONTHLY}
          </Text>
          <Spacing className="pl-3" />
          <div className={styles.box}>
            <label className={styles.label} htmlFor="toogle">
              <div className={styles.labelBox}>
                <input
                  onChange={(event) => setIsMounthly(!event.target.checked)}
                  id="toogle"
                  type="checkbox"
                  className="sr-only"
                />
                <div className={styles.line} />
                <div
                  className={classNames(styles.roundBox, {
                    ["translate-x-full"]: !isMounthly,
                  })}
                >
                  <div className={styles.roundBorder}>
                    <div className={styles.round} />
                  </div>
                </div>
              </div>
            </label>
          </div>
          <Spacing className="pl-3" />
          <Text
            className={classNames(styles.text, {
              [styles.indigoText]: !isMounthly,
              [styles.whiteText]: isMounthly,
            })}
          >
            {WORDS.ANNUALLY}
          </Text>
        </div>
        <Spacing className="pb-6" />
        <div className={styles.plansBox}>
          <Free data={free} />
          <Team data={team} />
          <Enterprice data={enterprise} />
        </div>
        <Spacing className="pb-11" />
      </Container>
    </Section>
  );
};

export default Pricing;
