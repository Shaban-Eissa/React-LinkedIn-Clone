import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React JS", "New content for react coding")}
      {newsArticle("Javascript", "New content for javascript coding")}
      {newsArticle("Html", "New content for html coding")}
      {newsArticle("CSS", "New content for css coding")}
      {newsArticle("Tailwind CSS", "New content for tailwind coding")}
    </div>
  );
}

export default Widgets;
