import PropTypes from "prop-types";
import { forwardRef } from "react";

const Paragraph = forwardRef(({ children, ...paragraphProps }, ref) => {
  return (
    <p ref={ref} {...paragraphProps}>
      {children}
    </p>
  );
});

Paragraph.propTypes = {
  className: PropTypes.string,
};

Paragraph.displayName = "Paragraph";
export default Paragraph;
