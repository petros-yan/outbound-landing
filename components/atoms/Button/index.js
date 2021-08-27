import { forwardRef } from "react";
import PropTypes from "prop-types";
import { BUTTON_TYPES, HTML_TYPES } from "consts";
import classNames from "classnames";

const styles = {
  [BUTTON_TYPES.DEFAULT]: "",
  [BUTTON_TYPES.STANDARD]: "rounded-lg text-14 px-22px py-2",
  [BUTTON_TYPES.WITH_ICON]: "rounded-lg text-14 py-8px pr-22px pl-17px",
};

const Button = forwardRef((props, ref) => {
  const { children, className, type, htmlType, onClick, ...buttonProps } =
    props;

  return (
    <button
      ref={ref}
      type={htmlType}
      onClick={onClick}
      className={classNames(className, styles[type])}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    BUTTON_TYPES.DEFAULT,
    BUTTON_TYPES.STANDARD,
    BUTTON_TYPES.WITH_ICON,
    BUTTON_TYPES.HORIZONTAL_MENU_BUTTON,
  ]),
  htmlType: PropTypes.oneOf([
    HTML_TYPES.SUBMIT,
    HTML_TYPES.RESET,
    HTML_TYPES.BUTTON,
  ]),
};

Button.defaultProps = {
  type: BUTTON_TYPES.DEFAULT,
  htmlType: HTML_TYPES.BUTTON,
};

Button.displayName = "Button";
export default Button;
