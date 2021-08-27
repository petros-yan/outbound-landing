import PropTypes from "prop-types";
import { forwardRef } from "react";

const Text = forwardRef(({ children, className, ...textProps }, ref) => {
  return (
    <span ref={ref} className={className} {...textProps}>
      {children}
    </span>
  );
});

Text.propTypes = { className: PropTypes.string };

Text.displayName = "Text";
export default Text;
