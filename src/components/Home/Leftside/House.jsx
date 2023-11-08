import React from "react";
import { Link } from "react-router-dom";
import house1 from "./Img/1.png";
import house2 from "./Img/2.png";
import house3 from "./Img/3.png";
import house4 from "./Img/4.png";
import "./house.css";
import arrow from "./Img/Red-Left-Arrow-PNG-Clipart.png";

function House() {
  return (
    <>
      <div className="house">
        <h2>Houses</h2>
        <div className="fotohouse">
          <h3>House # 1</h3>
          <div className="one">
            <img src={house1} alt="House 1"></img>
            <Link to="/more_foto_house">
              <img className="arrow" src={arrow} alt="arrow"></img>
            </Link>

            <p>
              A small, beautiful house with an attic is an ideal option for
              saving money on construction, since organizing a living space
              under a roof will be much cheaper than adding a full second floor.
              Thanks to the attic with a usable area, such a house has an
              advantage over an ordinary one-story house occupying the same plot
              of land. attic with a usable area, such a house has an advantage
              over an ordinary one-story house occupying the same plot of land.
            </p>
          </div>
          <h3>House # 2</h3>
          <div className="two">
            <p>
              A small, beautiful house with an attic is an ideal option for
              saving money on construction, since organizing a living space
              under a roof will be much cheaper than adding a full second floor.
              Thanks to the attic with a usable area, such a house has an
              advantage over an ordinary one-story house occupying the same plot
              of land.A small, beautiful house with an attic is an ideal option
              for saving money on construction, since organizing a living space
              under a roof will be much cheaper than adding a full second floor.
              Thanks to the attic with a usable area, such a house has an
              advantage over an ordinary one-story house occupying the same plot
              of land.
            </p>
            <img src={house2} alt="House 2"></img>
          </div>
          <h3>House # 3</h3>
          <img src={house3} alt="House 3"></img>
          <p>
            A small, beautiful house with an attic is an ideal option for saving
            money on construction, since organizing a living space under a roof
            will be much cheaper than adding a full second floor. Thanks to the
            attic with a usable area, such a house has an advantage over an
            ordinary one-story house occupying the same plot of land.
          </p>
          <h3>House # 4</h3>
          <img src={house4} alt="House 4"></img>
          <p>
            A small, beautiful house with an attic is an ideal option for saving
            money on construction, since organizing a living space under a roof
            will be much cheaper than adding a full second floor. Thanks to the
            attic with a usable area, such a house has an advantage over an
            ordinary one-story house occupying the same plot of land.
          </p>
        </div>
      </div>
      <button classNAme="button-house">
        <Link to="/" className="back">
          Home
        </Link>
      </button>
    </>
  );
}
export { House };
