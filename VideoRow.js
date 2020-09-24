import React from "react";
import './VideoRow.css'
function VideoRow({ views,
     subs,
      description,
       channel, 
       timestamp,title,image }) {
  return (
  <div className="videoRow">
<img src={image} alt=""/>
<div className="videoRow__text">
<h3>{title}</h3>
<p className="videoRow__headline">
{channel} .
<span className="videoRow__subs">
<span className="videoRow__subsNumber"> {subs}</span> .
</span>
{views} . {timestamp}</p>

<p className="videoRow__desciption">{description}</p>
</div>
  </div>
  );
}

export default VideoRow;
