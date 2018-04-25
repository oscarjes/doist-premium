import React from "react";
import ontrackImg from "../images/on-track.png";

const Ontrack = () => (
  <div className="flex flex-wrap bg-grey-lightest pt-8 pb-8 w-full">
    <div className="md:w-1/2 sm:w-full pl-4 pr-4" style={{paddingLeft: "10%", maxWidth:"550px"}}>
      <h2 className="text-4xl pt-8 text-grey-darker mt-8 ">Keep projects on track</h2>
      <p className="text-grey-darker text-xl font-thin max-w-sm mt-8 mb-8">Get a clear overview of everything your team is working on – what’s already been done and what’s coming up next.</p>
      <ul className="text-grey-darker font-thin list-reset">
        <li className="mb-2">✅ See your team’s activity stream by project or team member</li>
        <li className="mb-2">✅ Save custom views for upcoming or overdue tasks</li>
      </ul>
    </div>
    <div className="md:w-1/2 sm:w-full pl-8 pr-8">
      <img className="pt-8" src={ontrackImg} />
    </div>
  </div>
);

export default Ontrack;