import React from "react";
import collaborateImg from "../images/collaborate.png";

const Collaborate = () => (
  <div className="flex flex-wrap pt-8 pb-8 w-full sm:justify-center">
    <div className="md:w-1/2 sm:w-full"><img style={{maxWidth: "90%"}} className="float-right pt-8" src={collaborateImg} /></div>
    <div className="md:w-1/2 sm:w-full pl-4 pr-4">
    <h2 className="text-4xl pt-8 text-grey-darker mt-8 ">Collaborate efficiently</h2>
      <p className="text-grey-darker text-xl font-thin max-w-sm mt-8 mb-8">Say goodbye to lost sticky notes, chaotic email threads, and long status meetings.</p>
      <ul className="text-grey-darker font-thin list-reset">
        <li className="mb-2">✅ Share files</li>
        <li className="mb-2">✅ Discuss details</li>
        <li className="mb-2">✅ Keep everyone informed of progress</li>
      </ul>
      <p className="text-grey-darker text-xl font-thin max-w-sm mt-8 mb-8">Everything stays organized for everyone.</p>
    </div>
  </div>
);

export default Collaborate;