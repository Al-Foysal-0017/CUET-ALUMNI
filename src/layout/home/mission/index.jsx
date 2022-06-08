import React from "react";
import TSCImg from "../../../assets/img/TSC.JPG";
import BigButton from "../../../components/bigButton";
import "./__mission.scss";

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission__left">
        <img src={TSCImg} alt="" />
      </div>
      <div className="mission__right">
        <div className="mission__title">Our Mission</div>
        <div className="mission__subtitle">
          Science and technology work for the world through the people who
          create it, innovate it, and deliver it. People work better and achieve
          more together. Science and technology work for the world through the
          people who create it, innovate it, and deliver it. People work better
          and achieve more together.
        </div>
        <BigButton name="Learn More" link="" />
      </div>
    </div>
  );
};

export default Mission;
