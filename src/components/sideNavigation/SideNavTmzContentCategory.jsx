import { HiChevronUp } from "react-icons/hi2";

const SideNavTmzContentCategory = ({ category, onShow, isTabConnected }) => {
  return (
    <div className="side-nav__tab" data-category={category} onClick={onShow}>
      <a className="heading--secondary side-nav__tab__title">
        {category}
        {isTabConnected && <span className="side-nav__tab__title--active">Connected</span>}
      </a>
      <HiChevronUp className="side-nav__tab__arrow" />
    </div>
  );
};

export default SideNavTmzContentCategory;
