import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = () => {
  return (
    <div className="card-item">
      <Link>
        <div className="card-inner">
          <div className="card-top">
            <img src="" />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
