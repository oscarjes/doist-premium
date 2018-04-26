import React from "react";
import reminders from "../images/reminders.png";
import templates from "../images/templates.png";
import backups from "../images/backups.png";
import Highlight from '../components/highlight';

const Features = props => (
  <div className="flex flex-wrap pt-8 pb-8 w-full">
    <div className="md:w-1/2 sm:w-full pl-8 pr-8 self-center">
    
      <img className="pt-8 float-left" src={props.selectedImage == '1' ? reminders : templates} />
    </div>
    <div className="md:w-1/2 sm:w-full pl-4 pr-4" style={{maxWidth:"550px"}}>
      <h2 className="text-4xl font-medium pt-8 text-grey-darkest mt-8 ">More features. More peace of mind.</h2>
      <p className="text-grey-darkest tracking-wide text-2xl font-thin max-w-sm mt-8 mb-8">Think of Todoist Premium as your second, completely reliable brain.</p>
      {
        props.highlights.map((h) =>
          <Highlight key={h.order} order={h.order} handleClick={props.handleClick} icon={h.icon} headline={h.headline} text={h.text} selected={h.selected} />
        )
      }
    </div>
  </div>
);

export default Features;