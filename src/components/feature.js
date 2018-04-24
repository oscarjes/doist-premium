import React from "react";
import feature1 from "../images/feature1.svg";
import feature2 from "../images/feature2.svg";
import feature3 from "../images/feature3.svg";

const Feature = () => (
  <div className="bg-grey-lightest pt-8 pb-8 text-center w-full">
    <h2 className="text-4xl text-grey-darker mt-8 ">Your team’s tasks, files, and discussions</h2>
    <p className="text-grey text-xl font-thin mt-8 mb-8">All neatly organized in one place.</p>
    <div className="flex  justify-center flex-wrap flex-row min-w-50 min-w-50">
      <div className="text-grey-darker text-center px-4 py-2 m-2 mr-8">
        <img src={feature1} />
        <p className="text-grey-darker text-base font-semibold mt-8 mb-8">Plan Projects & Assign<br/> Responsibility</p>
      </div>
      <div className="text-grey-darker text-center px-4 py-2 m-2 ml-8 mr-8">
        <img src={feature2} />
        <p className="text-grey-darker text-base font-semibold mt-8 mb-8">Share Files & Discuss the<br/> Details</p>
      </div>
      <div className="text-grey-darker text-center px-4 py-2 m-2 ml-8">
        <img src={feature3} />
        <p className="text-grey-darker text-base font-semibold mt-8 mb-8">Track Progress & Deliver<br/> On Time</p>
      </div>
    </div>
  </div>
);

export default Feature;