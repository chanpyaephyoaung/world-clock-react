import { useContext, useEffect, useRef } from "react";
import "../../scss/clock.scss";
import themes from "../../data/themes";
import { animateClockHandsOnTmzChange, setClock } from "../../utils/clock";
import TmzContext from "../../store/tmz-context";

let initialized = false;

const Clock = ({ themeCount, showTime }) => {
  const clockRef = useRef();
  const clockPivot = useRef(null);
  const hourHand = useRef(null);
  const minuteHand = useRef(null);
  const secondHand = useRef(null);

  const tmzCtx = useContext(TmzContext);

  // Run the clock
  useEffect(() => {
    const clockParams = [
      secondHand.current,
      minuteHand.current,
      hourHand.current,
      tmzCtx.currentTmz,
    ];
    animateClockHandsOnTmzChange(...clockParams);

    const clockInterval = setInterval(() => {
      setClock(...clockParams);
    }, 1000);

    return () => clearTimeout(clockInterval);
  }, [tmzCtx.currentTmz]);

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
      [clockPivot, hourHand, minuteHand, secondHand].forEach(
        inner => (inner.current.style.backgroundColor = themes[themeCount].clockInnersColor)
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
      <div ref={clockPivot} className="clock__pivot"></div>
      <div
        ref={hourHand}
        className="clock__hand clock__hand--hour"
        style={{ transform: `translateX(-50%) rotate(0deg)` }}
      ></div>
      <div
        ref={minuteHand}
        className="clock__hand clock__hand--minute"
        style={{ transform: `translateX(-50%) rotate(0deg)` }}
      ></div>
      <div
        ref={secondHand}
        className="clock__hand clock__hand--second"
        style={{ transform: `translateX(-50%) rotate(0deg)` }}
      ></div>
    </div>
  );
};

export default Clock;
