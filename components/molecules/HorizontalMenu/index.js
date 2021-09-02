import Link from "next/link";
import { useRouter } from "next/router";
import { Paragraph } from "components/atoms";
import { OutboundLogo, GoogleButton } from "components/molecules";
import { WORDS, HEADER_MENU_ITEMS } from "consts";
import classNames from "classnames";

const styles = {
  box: "flex items-center justify-between h-full",
  itemsBox: "flex items-center",
  item: "ml-9 p-2 text-white text-14 rounded-lg cursor-pointer border border-transparent hover:border-white-25",
  activeItem: "bg-white-25",
};

const HorizontalMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.box}>
      <OutboundLogo />

      <nav>
        <ul className={styles.itemsBox}>
          {HEADER_MENU_ITEMS.map((menuItem) => {
            const { title, link } = menuItem;

            return (
              <li key={link}>
                <Link key={link} href={link} className={styles.item} passHref>
                  <Paragraph
                    className={classNames(styles.item, {
                      [styles.activeItem]: router.pathname === link,
                    })}
                  >
                    {title}
                  </Paragraph>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <GoogleButton title={WORDS.CONTINUE_WITH_GOOGLE} />
    </div>
  );
};

export default HorizontalMenu;
