import React from "react";
import { Link } from "react-router-dom";
import './more_foto_house.css'
import more1 from "./Img/11.jpg";
import more2 from "./Img/22.jpg";
import more3 from "./Img/33.jpg";
import more4 from "./Img/44.jpg";
import arrow from "./Img/Red-Left-Arrow-PNG-Clipart.png";

function More_foto_house() {
  return (
    <div className='more-foto-house'>
      <p>More foto house</p>
      <div className="morefoto1">
        <img src={more1} alt=""></img>
        <img src={more2} alt=""></img>
      </div>
      <p>More foto house</p>
      <div className="morefoto2">
        <img src={more3} alt=""></img>
        <img src={more4} alt=""></img>
      </div>
      <Link to="/house" className="back">
        <img className="arrow" src={arrow} alt="arrow"></img>
      </Link>
    </div>
  );
}
export { More_foto_house };
