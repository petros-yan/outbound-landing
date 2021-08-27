import PropTypes from "prop-types";
import { Header, Footer } from "components/organisms";
import classNames from "classnames";
import { styles } from "ansi-colors";

const classes = {
  root: "min-h-screen flex flex-col",
};

const BACKGROUND_TYPES = {
  ALPHA: "bg-primary",
  BETA: "bg-red-100",
  GRADIENT_ALPHA: "",
};

const Section = ({ children, background }) => {
  const backgroundClasses = BACKGROUND_TYPES[background];
  return (
    <section className={classNames(backgroundClasses, classes.root)}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};

export default Section;
