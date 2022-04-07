import React, { useEffect } from "react";
import "./MovieDetail.scss";
const MovieDetail = () => {
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> :
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> :
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> :
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> :
          </span>
        </div>
        <div className="movie-plot"></div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span></span>
          </div>
          <div>
            <span>Stars</span>
            <span></span>
          </div>
          <div>
            <span>Generes</span>
            <span></span>
          </div>
          <div>
            <span>Languages</span>
            <span></span>
          </div>
          <div>
            <span>Awards</span>
            <span></span>
          </div>
        </div>
        <div className="section-right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
