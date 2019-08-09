import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.selectPicture(props.id)} className="select">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      
       
      </span>
    </div>
  );
}

export default PictureCard;
