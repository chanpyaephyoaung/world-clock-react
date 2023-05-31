import { HiChevronDown } from "react-icons/hi2";

const SideNavTmzContentCategory = ({ category, onShow, isTabConnected, isActive }) => {
  return (
    <div className="side-nav__tab" onClick={onShow}>
      <a className="heading--secondary side-nav__tab__title">
        {category}
        {isTabConnected && <span className="side-nav__tab__title--active">Connected</span>}
      </a>
      <HiChevronDown
        className={`side-nav__tab__arrow ${isActive ? "side-nav__tab__arrow--active" : ""}`}
      />
    </div>
  );
};

export default SideNavTmzContentCategory;
