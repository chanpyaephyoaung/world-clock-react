import { useEffect, useRef } from "react";
import "../../scss/clock.scss";
import themes from "../../data/themes";

let initialized = false;

const Clock = ({ themeCount, showTime }) => {
  const clockRef = useRef();
  const clockInnersRef = useRef([]);

  // Allow the clock to stay on top if the time display is activated
  useEffect(() => {
    if (showTime) {
      clockRef.current.style.top = "0";
    } else {
      clockRef.current.style.top = "";
    }
  }, [showTime]);

  // For changing the clock theme whenever the IconChangeTheme is triggered
  useEffect(() => {
    const clockImageUrl = new URL(
      `../../assets/clock/${themes[themeCount].clock}.png`,
      import.meta.url
    ).href;

    // Preventing the change/animation for the initial render
    if (!initialized) {
      initialized = true;
      return;
    }

    // Animate the clock image change and color of inners of the clock
    clockRef.current.style.animation = "clockIn .2s forwards";
    const timerID = setTimeout(() => {
      // Change the clock image
      clockRef.current.style.animation = "clockOut .2s forwards";
      clockRef.current.style.backgroundImage = `url(${clockImageUrl})`;

      // Change the color of hands of the clock
      clockInnersRef.current.forEach(
        inner => (inner.style.backgroundColor = themes[themeCount].clockInnersColor)
      );
    }, 200);

    // Clean up the timer
    return () => clearTimeout(timerID);
  }, [themeCount]);

  return (
    <div
      ref={clockRef}
      className="clock"
      style={{
        animation: showTime ? "moveToTop .2s forwards" : "moveBackToCenterFromTop .2s forwards",
      }}
    >
      <div ref={el => (clockInnersRef.current[0] = el)} className="clock__pivot"></div>
      <div
        ref={el => (clockInnersRef.current[1] = el)}
        className="clock__hand clock__hand--hour"
      ></div>
      <div
        ref={el => (clockInnersRef.current[2] = el)}
        className="clock__hand clock__hand--minute"
      ></div>
      <div
        ref={el => (clockInnersRef.current[3] = el)}
        className="clock__hand clock__hand--second"
      ></div>
    </div>
  );
};

export default Clock;
