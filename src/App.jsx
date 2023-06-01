import { useState, useEffect } from "react";
import ClockWrapper from "./components/clock/ClockWrapper";
import Credit from "./components/credit/Credit";
import Header from "./components/header/Header";
import Overlay from "./components/overlay/Overlay";
import SideNav from "./components/sideNavigation/SideNav";
import themes from "./data/themes";
import TmzProvider from "./store/TmzProvider";
import { sliceCategory, sliceZoneName, categorize } from "./utils/timezones";

function App() {
  const [themeCount, setThemeCount] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [tmzData, setTmzData] = useState([]);

  // Fetching timezones
  useEffect(() => {
    // Fetch timezones
    const fetchTmzs = async () => {
      try {
        const response = await fetch(
          `http://api.timezonedb.com/v2.1/list-time-zone?key=${
            import.meta.env.VITE_TMZDB_API_KEY
          }&format=json`
        );
        if (!response.ok) throw new Error("Could not fetch timezones!");

        let { zones: rawTimezones } = await response.json();

        // Data Transformation
        rawTimezones = rawTimezones.map(({ zoneName }) => ({
          category: sliceCategory(zoneName),
          timezone: sliceZoneName(zoneName),
        }));

        const categories = categorize(rawTimezones.map(({ category }) => category));

        let finalTimezones = [];
        categories.forEach((category, index) => {
          finalTimezones.push({
            id: index + 1,
            category,
            timezones: rawTimezones
              .filter(tmz => tmz.category === category)
              .map(({ timezone }) => timezone),
          });
        });

        // Store transformed data
        setTmzData(finalTimezones);
      } catch (err) {
        console.error(`${err.message} 😭😭`);
      }
    };
    fetchTmzs();
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

  const closeSideNavHandler = () => {
    setShowSideNav(false);
  };

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
