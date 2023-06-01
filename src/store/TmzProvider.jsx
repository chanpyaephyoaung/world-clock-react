import { useState } from "react";
import TmzContext from "./tmz-context";

const TmzProvider = props => {
  const [connectedCategory, setConnctedCategory] = useState("Asia");
  const [connectedTmz, setConnectedTmz] = useState("Yangon");

  const handleSetTmz = tmz => {
    setConnectedTmz(tmz);
  };

  const handleSetCategory = category => {
    setConnctedCategory(category);
  };

  const tmzContext = {
    connectedCategory,
    connectedTmz,
    setCategory: handleSetCategory,
    setTmz: handleSetTmz,
  };

  return <TmzContext.Provider value={tmzContext}>{props.children}</TmzContext.Provider>;
};

export default TmzProvider;
