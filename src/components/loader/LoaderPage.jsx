import "../../scss/spinner.scss";

const Loader = ({ message }) => {
  const spinnerUrl = new URL(`../../assets/spinner.svg`, import.meta.url).href;
  return (
    <div className="spinner__wrapper">
      <img className="spinner" src={spinnerUrl} />
      <p>{message}</p>
    </div>
  );
};

export default Loader;
