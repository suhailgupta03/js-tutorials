// import { Link } from "react-router-dom";
import React from "react";

function onClick(event) {
  event.preventDefault();
  window.location.href = "http://localhost:3000/video";
}

export function MediaDescription(props) {
    const {description, title, source} = props

    return <div className="card mb-5 me-3 bg-light" style={{
        width: "18rem",
      }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>

          <a href="#" onClick={onClick} className="card-link">
            Open Video
          </a>
        </div>
      </div>
}
