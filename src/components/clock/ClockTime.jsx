import "../../scss/clock.scss";

const ClockTime = () => {
  return (
    <div className="time hidden">
      <h3 className="time__duration">
        <span className="time__duration__text time__duration__text--number time__duration--hour">
          09
        </span>
        <span className="time__duration__text time__duration__text--separator">:</span>
        <span className="time__duration__text time__duration__text--number time__duration--minute">
          30
        </span>
        <span className="time__duration__text time__duration__text--separator">:</span>
        <span className="time__duration__text time__duration__text--number time__duration--second">
          45
        </span>
      </h3>

      <span className="time__period">AM</span>
    </div>
  );
};

export default ClockTime;
