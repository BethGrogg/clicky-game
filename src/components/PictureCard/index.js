import React from "react";
import "./style.css";

var imageStyle = {
  width: '325px',
  height: '325px',
  objectFit: 'cover'
}

function PictureCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.selectPicture(props.id)} className="select">
      <div className="img-container">
        <img alt={props.id} src={props.image} style={imageStyle}/>
      </div>
      
       
      </span>
    </div>
  );
}

export default PictureCard;
