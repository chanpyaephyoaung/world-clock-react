import { useState } from "react";
import TmzContext from "./tmz-context";

const TmzProvider = props => {
  const [currentTmz, setCurrentTmz] = useState("Asia/Yangon");

  const handleSetTmz = tmz => {
    setCurrentTmz(tmz);
  };

  const tmzContext = {
    currentTmz,
    setTmz: handleSetTmz,
  };

  return <TmzContext.Provider value={tmzContext}>{props.children}</TmzContext.Provider>;
};

export default TmzProvider;
