import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
// import imageUrl from "./imageUrl";

const StatBox = ({ order, icon, number, label }) => {
  return (
    <>
      <div className={`stat-box order-${order}`}>
        <div className="stat-box-header">
          <div className="stat-box-l">
            <p className="stat-number">
              {" "}
              <CountUp end={number} duration={3} />
            </p>
            <p className="stat-label">{label}</p>
          </div>
          <div className="stat-icon">
            <img src='/images/flexibility.png' alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatBox;
