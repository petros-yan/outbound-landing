import { HorizontalMenu, VerticalMenu } from "components/molecules";

const styles = {
  box: "h-10 bg-dark sticky top-0 z-50",
  horizontalMenuWrapper: "hidden lg:block h-full",
  verticalMenuWrapper: "lg:hidden h-full",
};

const Header = () => {
  return (
    <header className={styles.box}>
      <div className={styles.horizontalMenuWrapper}>
        <HorizontalMenu />
      </div>

      <div className={styles.verticalMenuWrapper}>
        <VerticalMenu />
      </div>
    </header>
  );
};

export default Header;
