
import React from "react";
import "./Card.css";

function Card(props){
    return (
        <>
        <div className="Container">
            <h2 className="user-name">{props.name}</h2>
            <img className="user-img" src={props.image} alt="Image" />
            <p className="user-desc">{props.desc}</p>
        </div>
        </>
    );
};
export default Card;