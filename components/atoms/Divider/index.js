import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { DIVIDER_TYPES } from "consts";

const styles = {
  [DIVIDER_TYPES.HORIZONTAL]: "w-full",
  [DIVIDER_TYPES.VERTICAL]: "h-full",
};

const Divider = ({ type, className }) => {
  return <div className={classNames(styles[type], className)} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf([DIVIDER_TYPES.HORIZONTAL, DIVIDER_TYPES.VERTICAL]),
  className: PropTypes.string,
};

export default Divider;
