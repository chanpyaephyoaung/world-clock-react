import React from "react";

const TmzContext = React.createContext({
  currentTmz: "",
  tmzData: [],
  setTmz: () => {},
});

export default TmzContext;
