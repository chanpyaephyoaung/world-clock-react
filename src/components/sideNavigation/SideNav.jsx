import "../../scss/sideNavigation.scss";
import "../../scss/typography.scss";
import "../../scss/icons.scss";
import { CiStopwatch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";
import SideNavTmzContent from "./SideNavTmzContent";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__contents">
        <div className="side-nav__headers">
          <div className="side-nav__header">
            <CiStopwatch className="icon icon--timezone" />
            <h2 className="heading--primary">Timezones</h2>
            <IoCloseOutline className="icon icon--close side-nav__close-icon" />
          </div>

          <div className="side-nav__sub-header">
            <h2 className="heading--secondary side-nav__sub-header__title">Current Timezone: </h2>
            <p className="side-nav__text side-nav__text--green side-nav__current-timezone">
              Asia/Rangoon
            </p>
            <ImSpinner11 className="side-nav__sub-header__revert-icon" />
          </div>
        </div>

        <div className="side-nav__content-container">
          <SideNavTmzContent />
          {/* <div className="side-nav__content">
            <div className="side-nav__tab" data-category="africa">
              <a className="heading--secondary side-nav__tab__title">
                Africa
                <span className="side-nav__tab__title--active">Connected</span>
              </a>
              <HiChevronUp className="side-nav__tab__arrow" aria-hidden="true" />
            </div>

            <div className="side-nav__tab__content hide">
              <a className="side-nav__text side-nav__timezone" data-timezone="Africa/Abidjan">
                Abidjan
                <span className="side-nav__timezone--active"></span>
              </a>
              <a className="side-nav__text side-nav__timezone" data-timezone="Africa/Abidjan">
                Accra
              </a>
              <a className="side-nav__text side-nav__timezone" data-timezone="Africa/Abidjan">
                Addis Ababa
              </a>
            </div>
          </div> */}
        </div>

        <p className="side-nav__footer-text">
          Learn more about Timezones <a className="side-nav__footer-text__link">here</a>
        </p>
      </div>
    </div>
  );
};

export default SideNav;
