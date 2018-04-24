import React from "react";
import device from "../images/device.svg";
import shareImg from "../images/share.jpg";

var sectionStyle = {
  backgroundColor: "#f3f2f0",
  width: "1265px",
  height: "494px",
  backgroundSize: "cover",
  backgroundPosition: "bottom right",
  backgroundImage: `url(${shareImg})`
};


const Share = () => (
  <div className="text-left w-full">
    <div className="" style={sectionStyle}>
      <div  style={{paddingTop: "5%", paddingLeft: "10%"}}>
        <h2 className="text-4xl pt-8 text-grey-darker mt-8 ">Share work to be done</h2>
        <p className="text-grey text-xl font-thin max-w-sm mt-8 mb-8">When everyone knows exactly what needs to be done and when, teamwork flows smoothly.</p>
        <ul className="text-grey font-thin list-reset">
          <li className="mb-2">✅ Create projects</li>
          <li className="mb-2">✅ Add tasks</li>
          <li className="mb-2">✅ Set due dates</li>
          <li className="mb-2">✅ Assign responsibility</li>
        </ul> 
      </div>
    </div>
  </div>
);

export default Share;