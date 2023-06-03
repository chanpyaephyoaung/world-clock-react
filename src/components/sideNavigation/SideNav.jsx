import React, { useState, useContext, useRef } from "react";
import "../../scss/sideNavigation.scss";
import "../../scss/typography.scss";
import "../../scss/icons.scss";
import { CiStopwatch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";
import SideNavTmzContent from "./SideNavTmzContent";
import TmzContext from "../../store/tmz-context";

const SideNav = ({ showSideNav, onCloseSideNav }) => {
  const revertIconRef = useRef(null);
  const [animateRevertIcon, setanimateRevertIcon] = useState(false);

  const tmzCtx = useContext(TmzContext);
  const { initialTmz, currentTmz } = tmzCtx;

  // Revert timezone back to initial timezone
  const revertBackToInitialTmz = () => {
    // Only revert if the current tmz is not the same as initial tmz
    if (initialTmz === currentTmz) return;
    tmzCtx.setTmz(initialTmz);
    // A little rotation animation
    setanimateRevertIcon(true);
    setTimeout(() => setanimateRevertIcon(false), 300);
  };

  return (
    <div className={`side-nav ${showSideNav ? "side-nav__toggle" : ""}`}>
      <div className="side-nav__contents">
        <div className="side-nav__headers">
          <div className="side-nav__header">
            <CiStopwatch className="icon icon--timezone" />
            <h2 className="heading--primary">Timezones</h2>
            <IoCloseOutline
              onClick={onCloseSideNav}
              className="icon icon--close side-nav__close-icon"
            />
          </div>

          <div className="side-nav__sub-header">
            <h2 className="heading--secondary side-nav__sub-header__title">Current Timezone: </h2>
            <p className="side-nav__text side-nav__text--green side-nav__current-timezone">
              {currentTmz}
            </p>

            <div
              ref={revertIconRef}
              className={`side-nav__sub-header__revert-icon`}
              style={{ animation: animateRevertIcon ? "rotateRevertIcon360 .3s forwards" : "" }}
            >
              <ImSpinner11 onClick={revertBackToInitialTmz} />
            </div>
          </div>
        </div>

        <div className="side-nav__content-container">
          <SideNavTmzContent />
        </div>

        <p className="side-nav__footer-text">
          Learn more about Timezones <a className="side-nav__footer-text__link">here</a>
        </p>
      </div>
    </div>
  );
};

export default React.memo(SideNav);
