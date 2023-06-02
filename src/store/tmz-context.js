import React from "react";

const TmzContext = React.createContext({
  initialTmz: "",
  currentTmz: "",
  tmzData: [],
  setTmz: () => {},
});

export default TmzContext;
