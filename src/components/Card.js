import React from "react";

import "./Card.css";

const Card = (props) => {
  const takeToUrl = () => {
    const { url } = props;
    return window.open(url, "_blank");
  };

  return (
    <div className="Card" onClick={takeToUrl}>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Card;
