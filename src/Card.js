import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

const Card = ({ name, icon, isDark }) => {
  const cardClass = classnames("card", { "is-dark": isDark });
  const iconStyle = isDark ? "white" : "black";

  return (
    <div className={cardClass}>
      <div className="card__icon">
        <FontAwesomeIcon icon={icon} color={iconStyle} size="5x" />
      </div>
      <div className="card__name">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
