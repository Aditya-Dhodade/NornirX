import React from "react";

import { Text } from "components";

const DesktopFiveNornirx = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[55px] m-auto shadow-bs w-[99%]"></div>
        <Text
          className="absolute font-fontspringdemoorganettosemiexp h-full inset-[0] justify-center m-auto text-gray_400 uppercase w-max"
          as="h4"
          variant="h4"
        >
          {props?.nornirx}
        </Text>
      </div>
    </>
  );
};

DesktopFiveNornirx.defaultProps = { nornirx: "nornirx" };

export default DesktopFiveNornirx;
