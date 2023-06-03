import "../../scss/error.scss";
import { ImSad } from "react-icons/im";

const ErrorPage = ({ message }) => {
  return (
    <div className="error__wrapper">
      <ImSad className="error__icon" />
      <p className="error__message">{message}</p>
    </div>
  );
};

export default ErrorPage;
