/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import "./intro.css";

import CustomButton from "../components/custom.button/custom.button";
import { useNavigate } from "react-router-dom";
import useDPadNavigation from "../hooks/useDPadNavigation";
import { useSoftKeys, softkeyCallback } from "../hooks/useSoftKeys";

export default function Intro() {
  const navigate = useNavigate();
  const softKeyCallbacks = softkeyCallback;
  softKeyCallbacks.enter = () => {
    handleNavigation.call();
  };
  softKeyCallbacks.right = () => {
    navigate(-1);
  };
  useSoftKeys(softkeyCallback);
  useDPadNavigation();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <div className="body">
      {
        <>
          <div class="titleHeader">
            <h5>
              DEVOS SAMPLE
              <br />
              (ReactJS)
            </h5>
            <div className="title">
              <h3>
                CURRENCY <br />
                CONVERTER
              </h3>
            </div>
          </div>

          <div className="navigationItem" tabIndex="0" href="asd">
            <CustomButton onChange={handleNavigation} />
          </div>
        </>
      }
    </div>
  );
}
