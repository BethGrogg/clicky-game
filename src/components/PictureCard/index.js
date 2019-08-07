import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      <span onClick={() => props.selectPicture(props.id)} className="select">
       
      </span>
    </div>
  );
}

export default PictureCard;
