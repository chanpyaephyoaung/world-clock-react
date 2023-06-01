import React from "react";

const TmzContext = React.createContext({
  connectedCategory: "",
  connectedTimezone: "",
  setTmz: tmz => {},
  setCategory: category => {},
});

export default TmzContext;
