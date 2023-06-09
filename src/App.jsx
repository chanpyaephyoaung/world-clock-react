import { useState, useEffect, useCallback, useContext } from "react";
import ClockWrapper from "./components/clock/ClockWrapper";
import Credit from "./components/credit/Credit";
import Header from "./components/header/Header";
import Overlay from "./components/overlay/Overlay";
import SideNav from "./components/sideNavigation/SideNav";
import themes from "./data/themes";
import TmzContext from "./store/tmz-context";

function App() {
  const [themeCount, setThemeCount] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const tmzCtx = useContext(TmzContext);
  const { setToggleActiveIndex } = tmzCtx;

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

  const showTimeHandler = () => {
    setShowTime(prevShowTime => !prevShowTime);
  };

  const showSideNavHandler = () => {
    setShowSideNav(prevShowSideNav => !prevShowSideNav);
  };

  const closeSideNavHandler = useCallback(() => {
    setShowSideNav(false);
    // Close all the tabs if the side nav is closed
    setToggleActiveIndex(0);
  }, [setToggleActiveIndex]);

  return (
    <>
      <SideNav showSideNav={showSideNav} onCloseSideNav={closeSideNavHandler} />
      <Overlay onCloseSideNav={closeSideNavHandler} showOverlay={showSideNav} />
      <Header
        onThemeChange={changeTheme}
        onShowTime={showTimeHandler}
        onShowSideNav={showSideNavHandler}
      />
      <ClockWrapper themeCount={themeCount} showTime={showTime} />
      <Credit themeCount={themeCount} />
    </>
  );
}

export default App;
