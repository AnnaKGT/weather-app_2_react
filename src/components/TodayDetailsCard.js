import React from "react";
import "./TodayDetailsCard.css";

export default function TodayDetailsCard(props) {
  return (
    <div className="details-card card">
      <div className="card-body">
        <h5 className="current-details-name">
          {props.name}, <span className="dimension">{props.dimension}</span>{" "}
        </h5>
        <div className="row">
          <div className="col-5">
            <h3>{props.icon}</h3>
          </div>
          <div className="col-7 details-description">
            <h3>
              <span id="wind">{props.numb}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
