import React from "react";

const TmzContext = React.createContext({
  initialTmzContentId: 0,
  initialTmz: "",
  currentTmz: "",
  setTmz: tmz => {},
  tmzData: [],
  toggleActiveIndex: 0,
  setToggleActiveIndex: id => {},
  setActiveTmzScroll: status => {},
  scrollToActiveTmz: false,
});

export default TmzContext;
