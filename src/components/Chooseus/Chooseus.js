import React from "react";
import image1 from "../../images/adult-blur-blurred-background-687824.png";
import image2 from "../../images/chef-cook-food-33614.png";
import image3 from "../../images/architecture-building-city-2047397.png";
import carIcon1 from '../../images/icons/Group 204.png';
import carIcon2 from '../../images/icons/Group 1133.png';
import carIcon3 from '../../images/icons/Group 245.png';
import { NavLink } from "react-router-dom";
const Chooseus = () => {
  return (
    <div id="choose" className="container mt-5">
      <h1>Why you choose us</h1>
      <p className="w-50 mt-3">
        Because we'll make you more money with customer-focused, convincing copy
        that sells money with harder.make you more money with customer-focused,
      </p>
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="card border-0">
            <img src={image1} alt="" />
            <div className="card-body d-flex">
              <div className="me-3">
                <img src={carIcon1} alt="" />
              </div>
              <div>
                <h3>Fast Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores reiciendis nulla nisi fuga repellendus enim ipsa.
                  Dolorum voluptatum laboriosam rem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0">
            <img src={image2} alt="" />
            <div className="card-body d-flex">
              <div className="me-3">
                <img src={carIcon2} alt="" />
              </div>
              <div>
                <h3>A Good Auto Response</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores reiciendis nulla nisi fuga repellendus enim ipsa.
                  Dolorum voluptatum laboriosam rem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0">
            <img src={image3} alt="" />
            <div className="card-body d-flex">
              <div className="me-3">
                <img src={carIcon3} alt="" />
              </div>
              <div>
                <h3>Fast Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores reiciendis nulla nisi fuga repellendus enim ipsa.
                  Dolorum voluptatum laboriosam rem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
