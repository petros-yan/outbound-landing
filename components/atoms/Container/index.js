import PropTypes from "prop-types";
import classNames from "classnames";

const classes = {
  desktop: "xl:w-1275px xl:px-0 w-full mx-auto",
  tablet: "md:px-6",
  mobile: "xs:px-4",
};

const Container = ({ children, className }) => {
  return (
    <div
      className={classNames(
        classes.desktop,
        classes.tablet,
        classes.mobile,
        className
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
