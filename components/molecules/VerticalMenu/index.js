import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Spacing, Text, Icons } from "components/atoms";
import { OutboundLogo, GoogleButton } from "components/molecules";
import { WORDS, HEADER_MENU_ITEMS } from "consts";
import classNames from "classnames";
const { Hamburger, Times } = Icons;

const styles = {
  box: "h-full relative z-50",
  topBox: "flex items-center justify-between h-full px-4",
  bottomBox: "flex flex-col w-full px-4 bg-dark transition-all text-center h-0",
  burger: "fill-current text-white",
  button: "text-black bg-green-500",
  item: "py-2 w-28 block text-white text-14 rounded-lg cursor-pointer border border-transparent hover:border-white-25",
  activeItem: "bg-white-25",
  itemsWrapper: "inline-block",
  googleButtonWrapper: "fixed left-1/2 transform -translate-x-1/2 bottom-10",
  verticalMenuHeight: "h-vertical-menu",
};

const VerticalMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.topBox}>
        <OutboundLogo />
        <div className="flex">
          <GoogleButton title={WORDS.CONTINUE} />
          <Spacing className="pl-4" />
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Hamburger className={styles.burger} />
          </Button>
        </div>
      </div>

      <div
        className={classNames(styles.bottomBox, {
          [styles.verticalMenuHeight]: isOpen,
        })}
      >
        {isOpen ? (
          <Fragment>
            <Spacing className="pb-6" />
            <nav className="flex-1">
              <ul className={styles.itemsWrapper}>
                {HEADER_MENU_ITEMS.map((menuItem) => {
                  const { title, link } = menuItem;

                  return (
                    <Fragment key={link}>
                      <li>
                        <Link
                          key={link}
                          href={link}
                          className={styles.item}
                          passHref
                        >
                          <Text
                            className={classNames(styles.item, {
                              [styles.activeItem]: router.pathname === link,
                            })}
                          >
                            {title}
                          </Text>
                        </Link>
                      </li>
                      <Spacing className="pb-3" />
                    </Fragment>
                  );
                })}
              </ul>
            </nav>
            <div>
              <GoogleButton title={WORDS.CONTINUE_WITH_GOOGLE} />
            </div>
            <Spacing className="pb-10" />
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default VerticalMenu;
