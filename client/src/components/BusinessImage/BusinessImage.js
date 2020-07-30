import React from "react";
import Image from "react-bootstrap/Image";
import "./BusinessImage.css";

function BusinessImage({imageUrl}){
    return (
        <div className="businessImage" style={{ backgroundImage:`url(${imageUrl})` }}></div>
    )
}

export default BusinessImage;