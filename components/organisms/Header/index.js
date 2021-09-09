import { Container } from "components/atoms";
import { HorizontalMenu, VerticalMenu } from "components/molecules";
import { Section } from "components/templates";

const styles = {
  section: "sticky top-0 z-50",
  container: "w-full sticky top-0 z-50 h-full",
  box: "h-10",
  horizontalMenuWrapper: "hidden lg:block h-full",
  verticalMenuWrapper: "lg:hidden h-full",
};

const Header = () => {
  return (
    <Section className={styles.section}>
      <header className={styles.box}>
        <div className={styles.horizontalMenuWrapper}>
          <Container className={styles.container}>
            <HorizontalMenu />
          </Container>
        </div>
        <div className={styles.verticalMenuWrapper}>
          <VerticalMenu />
        </div>
      </header>
    </Section>
  );
};

export default Header;
