import PropTypes from "prop-types";

const Spacing = ({ className }) => {
  return <div className={className} tabIndex="-1" />;
};

Spacing.propTypes = {
  className: PropTypes.string,
};

export default Spacing;
