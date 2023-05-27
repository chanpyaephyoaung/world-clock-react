import "../../scss/clock.scss";
import Clock from "./Clock";
import ClockTime from "./ClockTime";

const ClockWrapper = ({ themeCount, showTime }) => {
  return (
    <main className="clock-wrapper">
      <Clock themeCount={themeCount} showTime={showTime} />
      <ClockTime themeCount={themeCount} showTime={showTime} />
    </main>
  );
};

export default ClockWrapper;
