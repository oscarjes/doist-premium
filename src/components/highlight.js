import React from "react";

const Highlight = props => (
  <div onClick={(e) => props.handleClick(e, props.order)} className={`highlight px-4 py-4 rounded mb-8 ` + (props.selected ? 'bg-grey-lightest' : '')} style={{maxWidth: "400px"}}>
    <div className="icon mb-2">{props.icon}</div>
    <div className="text-xl mb-2 font-medium text-grey-darkest">{props.headline}</div>
    <div className="font-thin text-grey-darker">{props.text}</div>
  </div>
);

export default Highlight;