import React from "react";

const TmzContext = React.createContext({
  currentTmz: "",
  setTmz: () => {},
});

export default TmzContext;
