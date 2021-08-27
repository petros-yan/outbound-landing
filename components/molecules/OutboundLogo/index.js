import Link from "next/link";
import { Text, Spacing, Icons } from "components/atoms";
import { WORDS, PATHS } from "consts";
const { Outbound } = Icons;

const styles = {
  box: "flex items-center cursor-pointer",
  text: "font-bold text-18 text-white",
};

const OutboundLogo = () => {
  return (
    <Link href={PATHS.HOME} passHref>
      <div className={styles.box}>
        <Outbound />
        <Spacing className="pl-2" />
        <Text className={styles.text}>{WORDS.OUTBOUND}</Text>
      </div>
    </Link>
  );
};

export default OutboundLogo;
