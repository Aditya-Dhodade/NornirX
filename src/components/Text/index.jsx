import React from "react";

const variantClasses = {
  h1: "font-light sm:text-5xl md:text-5xl text-[84px]",
  h2: "font-extrabold sm:text-5xl md:text-5xl text-[69px]",
  h3: "font-extrabold sm:text-5xl md:text-5xl text-[68px]",
  h4: "font-normal sm:text-5xl md:text-5xl text-[67px]",
  h5: "font-normal sm:text-5xl md:text-5xl text-[66px]",
  h6: "font-semibold sm:text-5xl md:text-5xl text-[63px]",
  body1: "font-extrabold sm:text-[44px] md:text-[50px] text-[58px]",
  body2: "font-extrabold sm:text-[40px] md:text-[46px] text-[54px]",
  body3: "sm:text-[37px] md:text-[43px] text-[47px]",
  body4: "font-extrabold sm:text-[35px] md:text-[41px] text-[45px]",
  body5: "md:text-3xl sm:text-[28px] text-[32px]",
  body6: "text-2xl md:text-[22px] sm:text-xl",
  body7: "font-normal sm:text-[19px] md:text-[21px] text-[23px]",
  body8: "sm:text-[17px] md:text-[19px] text-[21px]",
  body9: "font-normal text-lg",
  body10: "font-extrabold sm:text-5xl md:text-5xl text-[114px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
