import { Container } from "components/atoms";
import { HorizontalMenu, VerticalMenu } from "components/molecules";
import { Section } from "components/templates";

const styles = {
  box: "h-10",
  horizontalMenuWrapper: "hidden lg:block h-full",
  verticalMenuWrapper: "lg:hidden h-full",
};

const Header = () => {
  return (
    <Section className="sticky top-0 z-50">
      <header className={styles.box}>
        <div className={styles.horizontalMenuWrapper}>
          <Container className="w-full sticky top-0 z-50 h-full">
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
