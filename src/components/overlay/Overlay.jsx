import React from "react";
import "../../scss/overlay.scss";

const Overlay = ({ showOverlay, onCloseSideNav }) => {
  return <div onClick={onCloseSideNav} className={`overlay ${!showOverlay ? "hidden" : ""}`}></div>;
};

export default React.memo(Overlay);
