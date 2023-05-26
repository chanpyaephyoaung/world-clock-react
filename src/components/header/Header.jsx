import "../../scss/header.scss";
import "../../scss/icons.scss";
import { CiGlobe } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import IconChangeTheme from "./IconChangeTheme";

const Header = () => {
  return (
    <header className="header">
      <IconChangeTheme />
      <div className="header__icon-wrapper clock-icon__wrapper">
        <CiClock1 className="icon icon--clock" />
      </div>

      <div className="header__icon-wrapper globe-icon__wrapper">
        <CiGlobe className="icon icon--globe" />
      </div>
    </header>
  );
};

export default Header;
