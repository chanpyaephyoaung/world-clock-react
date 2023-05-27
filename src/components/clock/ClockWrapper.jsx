import "../../scss/clock.scss";
import Clock from "./Clock";
import ClockTime from "./ClockTime";

const ClockWrapper = props => {
  return (
    <main className="clock-wrapper">
      <Clock themeCount={props.themeCount} />
      <ClockTime themeCount={props.themeCount} />
    </main>
  );
};

export default ClockWrapper;
