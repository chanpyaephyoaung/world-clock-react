import { HiChevronUp } from "react-icons/hi2";

const SideNavTmzContentCategory = ({ category }) => {
  return (
    <div className="side-nav__tab" data-category={category}>
      <a className="heading--secondary side-nav__tab__title">
        {category}
        <span className="side-nav__tab__title--active">Connected</span>
      </a>
      <HiChevronUp className="side-nav__tab__arrow" />
    </div>
  );
};

export default SideNavTmzContentCategory;
