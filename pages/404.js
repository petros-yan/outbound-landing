import { WORDS } from "consts";

const styles = {
  box: "flex justify-center items-center text-center h-100vh",
  title: "font-semibold text-lg text-red-500",
};

export default function NotFound() {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{WORDS.NOT_FOUND}</h2>
    </div>
  );
}
