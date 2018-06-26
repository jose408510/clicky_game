import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.removeFriend(props.id)} className="remove"
       alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
