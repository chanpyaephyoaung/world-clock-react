import "../../scss/overlay.scss";

const Overlay = ({ showOverlay, onCloseSideNav }) => {
  return (
    <div
      onClick={() => onCloseSideNav()}
      className={`overlay ${!showOverlay ? "hidden" : ""}`}
    ></div>
  );
};

export default Overlay;
