import { Icons } from "components/atoms";
import { WORDS, PATHS } from "consts";
const { Home, About, Pricing } = Icons;

export const HEADER_MENU_ITEMS = [
  {
    title: WORDS.HOME,
    link: PATHS.HOME,
  },
  {
    title: WORDS.ABOUT,
    link: PATHS.ABOUT,
  },
  {
    title: WORDS.PRICING,
    link: PATHS.PRICING,
  },
];

export const FOOTER_MENU_ITEMS = [
  {
    title: WORDS.HOME,
    link: PATHS.HOME,
    icon: <Home />,
  },
  {
    title: WORDS.PRICING,
    link: PATHS.PRICING,
    icon: <Pricing />,
  },
  {
    title: WORDS.ABOUT,
    link: PATHS.ABOUT,
    icon: <About />,
  },
];
