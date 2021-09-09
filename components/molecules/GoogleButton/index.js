import { Text, Spacing, Icons, Button } from "components/atoms";
import { BUTTON_TYPES } from "consts";
const { Google } = Icons;

const styles = {
  button: "text-indigo-500 bg-white",
  contentBox: "flex items-center",
};

const GoogleButton = (props) => {
  const { title } = props;

  return (
    <Button type={BUTTON_TYPES.WITH_ICON} className={styles.button}>
      <div className={styles.contentBox}>
        <Google />
        <Spacing className="pl-2" />
        <Text>{title}</Text>
      </div>
    </Button>
  );
};

export default GoogleButton;
