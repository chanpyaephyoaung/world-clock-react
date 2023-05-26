import "../../scss/clock.scss";

const Clock = () => {
  return (
    <div className="clock">
      <div className="clock__pivot"></div>
      <div className="clock__hand clock__hand--hour"></div>
      <div className="clock__hand clock__hand--minute"></div>
      <div className="clock__hand clock__hand--second"></div>
    </div>
  );
};

export default Clock;
