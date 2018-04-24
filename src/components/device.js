import React from "react";
import device from "../images/device.svg";

const Device = () => (
  <div className="pt-8 pb-8 text-center w-full">
    <h2 className="text-4xl text-grey-darker mt-8 ">On every device your team touches</h2>
    <p className="text-grey text-xl mx-auto font-thin max-w-sm mt-8 mb-8">With real-time sync across 10+ platforms, everyone will have the most up-to-date information. Always.</p>
    <img src={device} />
  </div>
);

export default Device;