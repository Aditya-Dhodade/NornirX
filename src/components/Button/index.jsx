import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder48: "rounded-[48px]",
  RoundedBorder36: "rounded-[36px]",
  RoundedBorder53: "rounded-[53px]",
};
const variants = {
  FillWhiteA700: "bg-white_A700",
  FillBlack90001: "bg-black_900_01 text-white_A700",
  Outline:
    "backdrop-opacity-[0.5] bg-black_900_a5 blur-[98.00px] text-white_A700",
  GradientGray5066WhiteA70019: "bg-gradient  text-white_A700",
};
const sizes = {
  sm: "",
  md: "p-[13px]",
  lg: "p-[17px]",
  xl: "p-6 sm:px-5",
  "2xl": "p-[29px] sm:px-5",
  "3xl": "p-8 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder48",
    "RoundedBorder36",
    "RoundedBorder53",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillBlack90001",
    "Outline",
    "GradientGray5066WhiteA70019",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
