import { useState, useEffect } from "react";
import ClockWrapper from "./components/clock/ClockWrapper";
import Credit from "./components/credit/Credit";
import Header from "./components/header/Header";
import Overlay from "./components/overlay/Overlay";
import SideNav from "./components/sideNavigation/SideNav";
import themes from "./data/themes";

function App() {
  const [themeCount, setThemeCount] = useState(0);

  // For changing the color of the background whenever IconChangeTheme is triggered
  useEffect(() => {
    document.body.style.backgroundColor = themes[themeCount].bgColor;

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [themeCount]);

  const changeTheme = () => {
    if (themeCount !== 3) {
      setThemeCount(count => count + 1);
    } else {
      setThemeCount(0);
    }
  };

  return (
    <>
      {/* <SideNav /> */}
      {/* <Overlay /> */}
      <Header onThemeChange={changeTheme} />
      <ClockWrapper themeCount={themeCount} />
      <Credit themeCount={themeCount} />
    </>
  );
}

export default App;
