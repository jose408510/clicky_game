import React from "react";
import "./Title.css";

const Title = props => 
<div className="jumbotron" className="title"> {props.children} 

<h1 className="display-4">Exotic Car Guessing Game</h1>


  <p className="lead">Simply click on a image and watch your score Go up! But, click on the wrong one and the games Over!!</p>

  <hr class="my-4"></hr>

</div>

export default Title;
