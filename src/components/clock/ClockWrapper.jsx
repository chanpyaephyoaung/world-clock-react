import "../../scss/clock.scss";
import Clock from "./Clock";
import ClockTime from "./ClockTime";

const ClockWrapper = () => {
  return (
    <main className="clock-wrapper">
      <Clock />
      <ClockTime />
    </main>
  );
};

export default ClockWrapper;
