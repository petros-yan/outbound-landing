import PropTypes from "prop-types";
import classNames from "classnames";

const styles = {
  dark: "bg-dark",
  root: "section2Bg",
  alpha: "bg-dark-alpha",
  black: "bg-black",
  gradient: "bg-gradient-gamma",
};

const Section = ({ children, className, bgType = "dark" }) => {
  return (
    <section className={classNames(styles[bgType], className)}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};

export default Section;
