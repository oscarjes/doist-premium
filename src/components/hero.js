import React from "react";
import heroImg from "../images/hero-background.jpg";

var sectionStyle = {
  backgroundSize: "cover",
  paddingTop: "100px",
  paddingBottom: "144px",
  backgroundPosition: "bottom right",
  backgroundImage: `url(${heroImg})`
};

const Hero = () => (
  <div className="test">
    <div className="" style={sectionStyle}>
      <div className="" style={{paddingTop: "5%", paddingLeft: "10%"}}>
        <div className=" text-sm mb-4 text-left tracking-wide text-white font-thin">
          TEAM TASK MANAGEMENT & COLLABORATION
        </div>
        <div className="text-4xl mb-8 text-left tracking-wide text-white font-semibold">
        The easiest way to make <br />
        sure everything gets done.
        </div>
        <button className="bg-red float-left hover:bg-red-dark text-sm text-white font-semibold py-4 px-8 rounded">
          TRY FREE FOR 30 DAYS
        </button>
      </div>
    </div>
    
</div>
);

export default Hero;