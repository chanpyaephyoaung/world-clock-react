import { useState, useEffect, useCallback } from "react";
import ClockWrapper from "./components/clock/ClockWrapper";
import Credit from "./components/credit/Credit";
import Header from "./components/header/Header";
import Overlay from "./components/overlay/Overlay";
import SideNav from "./components/sideNavigation/SideNav";
import themes from "./data/themes";
import TmzProvider from "./store/TmzProvider";
import { fetchTmzs } from "./utils/timezones";

function App() {
  const [themeCount, setThemeCount] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [tmzData, setTmzData] = useState([]);

  // Fetching timezones
  useEffect(() => {
    // Fetch timezones
    const fetchTmzsAsync = async () => {
      try {
        await fetchTmzs(finalTmzs => setTmzData(finalTmzs));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTmzsAsync();
  }, []);

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
  }, []);

  return (
    <TmzProvider>
      <SideNav showSideNav={showSideNav} onCloseSideNav={closeSideNavHandler} tmzData={tmzData} />
      <Overlay onCloseSideNav={closeSideNavHandler} showOverlay={showSideNav} />
      <Header
        onThemeChange={changeTheme}
        onShowTime={showTimeHandler}
        onShowSideNav={showSideNavHandler}
      />
      <ClockWrapper themeCount={themeCount} showTime={showTime} />
      <Credit themeCount={themeCount} />
    </TmzProvider>
  );
}

export default App;
