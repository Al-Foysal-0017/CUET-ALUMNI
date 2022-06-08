import React from "react";
import TSCImg from "../../../assets/img/TSC.JPG";
import BigButton from "../../../components/bigButton";
import "./__engage.scss";

const Enagage = () => {
  return (
    <div className="enagage">
      <div className="enagage__left">
        <div className="enagage__title">Engage</div>
        <div className="enagage__subtitle">
          Science and technology work for the world through the people who
          create it, innovate it, and deliver it. People work better and achieve
          more together.
        </div>
        <BigButton name="Learn More" link="" />
      </div>
      <div className="enagage__right">
        <img src={TSCImg} alt="" />
      </div>
    </div>
  );
};

export default Enagage;
