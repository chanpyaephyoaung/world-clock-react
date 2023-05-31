import "../../scss/clock.scss";
import "../../scss/animation.scss";
import themes from "../../data/themes";
import { useEffect, useRef } from "react";
import { setTime } from "../../utils/clock";

const ClockTime = ({ themeCount, showTime }) => {
  const hourTime = useRef(null);
  const minuteTime = useRef(null);
  const secondTime = useRef(null);
  const dayPeriod = useRef(null);

  const tmz = "Asia/Yangon";

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(secondTime.current, minuteTime.current, hourTime.current, dayPeriod.current, tmz);
    }, 1000);
    return () => clearTimeout(clockInterval);
  }, []);

  return (
    <div
      className="time"
      style={{
        color: themes[themeCount].textColor,
        animation: showTime
          ? "moveToBottom .3s forwards"
          : "moveBackToCenterFromBottom .3s forwards",
      }}
    >
      <h3 className="time__duration">
        <span
          ref={hourTime}
          className="time__duration__text time__duration__text--number time__duration--hour"
        >
          00
        </span>
        <span className="time__duration__text time__duration__text--separator">:</span>
        <span
          ref={minuteTime}
          className="time__duration__text time__duration__text--number time__duration--minute"
        >
          00
        </span>
        <span className="time__duration__text time__duration__text--separator">:</span>
        <span
          ref={secondTime}
          className="time__duration__text time__duration__text--number time__duration--second"
        >
          00
        </span>
      </h3>

      <span ref={dayPeriod} className="time__period">
        AM
      </span>
    </div>
  );
};

export default ClockTime;
