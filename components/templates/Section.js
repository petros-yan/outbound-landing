import PropTypes from "prop-types";
import classNames from "classnames";
import { SECTION_COLORS } from "consts";

const Section = ({ children, className, bg = SECTION_COLORS.DARK }) => {
  return <section className={classNames(bg, className)}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};

export default Section;
