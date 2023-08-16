import React from "react";
import { useEffect, useRef } from "react";
import { useFetchData } from "../hooks/useFetchData";

import { useSoftKeys, softkeyCallback } from "../hooks/useSoftKeys";
import "./home.css";
import TextFieldWithSuffix from "../components/custom.text.field/custom.text.field";
import SoftKeys from "../components/softkeys/softkeys";
import useDPadNavigation from "../hooks/useDPadNavigation";

export default function Home() {
  const { data, isLoading, fetchData } = useFetchData();
  const refs = [useRef(null), useRef(null)];

  const softKeyCallbacks = softkeyCallback;
  const flipFocus = () => {
    try {
      if (document.activeElement === refs[0].current) {
        refs[1].current.focus();
      } else {
        refs[0].current.focus();
      }
    } catch (error) {}
  };
  softKeyCallbacks.arrowDown = flipFocus;
  softKeyCallbacks.arrowLeft = flipFocus;
  softKeyCallbacks.arrowRight = flipFocus;
  softKeyCallbacks.arrowUp = flipFocus;

  useEffect(() => {
    fetchData("1", "USD", "EUR");
  }, []);
  useDPadNavigation();

  useSoftKeys(softkeyCallback);

  let typingTimer;
  const typingDelay = 500;

  async function onTypingStop(e, base, target) {
    await fetchData(e, base, target);
  }

  function handleTyping(e, base, target) {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => onTypingStop(e, base, target), typingDelay);
  }

  return (
    <>
      <header class="header">
        <span>CURRENCY CONVERTER</span>
      </header>
      <div className="homeApp">
        <div className="loading">
          <>{isLoading ? <p>Loading...</p> : <span></span>}</>
        </div>

        <TextFieldWithSuffix
          refs={refs[1]}
          suffix={"Dollar"}
          onInputChange={(e) => handleTyping(e, "USD", "EUR")}
          value={
            data.converted_amount !== undefined ? getValue("USD", data) : ""
          }
        />

        <TextFieldWithSuffix
          suffix={"Euro"}
          onInputChange={(e) => handleTyping(e, "EUR", "USD")}
          refs={refs[0]}
          value={
            data.converted_amount !== undefined ? getValue("EUR", data) : "1"
          }
        />
        <SoftKeys props={{ left: " ", center: "Devos", right: " " }} />
      </div>
    </>
  );
}

const getValue = (target, data) => {
  if (target === data.target) {
    return data.converted_amount;
  } else {
    return data.base_amount;
  }
};
