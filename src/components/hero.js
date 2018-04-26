import React from "react";
import heroImg from "../images/premium-hero.png";

var sectionStyle = {
  backgroundSize: "cover",
  paddingTop: "200px",
  paddingBottom: "320px",
  backgroundPosition: "center",
  backgroundImage: `url(${heroImg})`
};

const Hero = () => (
  <div className="test">
    <div className="" style={sectionStyle}>
      <div className="flex flex-col justify-center">
        <div className="text-center text-5xl mb-4 tracking-wide text-white font-semibold">
        Take on your biggest projects and goals
        </div>
        <div className="text-center text-2xl mb-8 tracking-wide text-grey-light font-semithin">
        with Todoist’s smartest features
        </div>
        <button className="flex-none bg-red hover:bg-red-dark text-sm text-white font-semibold pr-8 pl-8 py-6 mx-auto rounded">
          GET PREMIUM
        </button>
      </div>
    </div>
    
</div>
);

export default Hero;