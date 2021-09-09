import Link from "next/link";
import { Section } from "components/templates";
import { OutboundLogo } from "components/molecules";
import {
  WORDS,
  FOOTER_MENU_ITEMS,
  DIVIDER_TYPES,
  SECTION_COLORS,
} from "consts";
import {
  Icons,
  Divider,
  Paragraph,
  Spacing,
  Text,
  Container,
} from "components/atoms";
const { Twitter, Linkedin } = Icons;

const styles = {
  footer: "flex flex-col lg:flex-row justify-between pb-8 pt-7 w-full bg-black",
  leftBox: "lg:order-first order-last",
  rightBox: "md:flex lg:order-last order-first",
  itemsWrapper: "pb-10 lg:pb-0",
  iconsWrapper: "flex pb-8 lg:pb-0",
  divider: "hidden md:block bg-white-50 w-0.5px h-22",
  grayText: "text-white-75 text-16",
  italicText: "text-white-75 italic text-14",
  whiteText: "text-white text-14",
  link: "inline-flex items-center cursor-pointer",
};

const Footer = () => {
  return (
    <Section bg={SECTION_COLORS.BLACK}>
      <Container>
        <footer className={styles.footer}>
          <div className={styles.leftBox}>
            <OutboundLogo />
            <Spacing className="pb-2" />
            <Paragraph className={styles.italicText}>
              {WORDS.SUPERPOWERS_FOR_SALES_EMAILS}
            </Paragraph>
            <Spacing className="pb-6" />
            <Paragraph className={styles.whiteText}>
              {WORDS.ALL_RIGHTS_RESERVED}
            </Paragraph>
          </div>

          <div className={styles.rightBox}>
            <nav className={styles.itemsWrapper}>
              {FOOTER_MENU_ITEMS.map((menuItem) => {
                const { icon, link, title } = menuItem;

                return (
                  <ul key={link}>
                    <li>
                      <Link href={link} passHref>
                        <Text className={styles.link}>
                          <Text className="w-4 h-4">{icon}</Text>
                          <Spacing className="pl-3" />
                          <Text className={styles.grayText}>{title}</Text>
                        </Text>
                      </Link>
                    </li>
                    <Spacing className="pb-22px" />
                  </ul>
                );
              })}
            </nav>

            <Spacing className="pr-10" />

            <div className={styles.iconsWrapper}>
              <Divider
                type={DIVIDER_TYPES.VERTICAL}
                className={styles.divider}
              />
              <Spacing className="md:pr-8" />
              <div>
                <Text className={styles.grayText}>
                  {WORDS.TERMS_OF_SERVICE}
                </Text>
                <Spacing className="pb-4" />
                <Text className={styles.grayText}>{WORDS.CONTACT_US}</Text>
                <Spacing className="pb-3" />

                <div className="flex">
                  <Linkedin />
                  <Spacing className="pr-4" />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
};

export default Footer;
