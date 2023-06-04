import { HiChevronDown } from "react-icons/hi2";
import { sliceCategory } from "../../utils/timezones";
import { useContext } from "react";
import TmzContext from "../../store/tmz-context";

const SideNavTmzContentCategory = ({ contentId, category, onToggle, isActive, connectedTmz }) => {
  const tmzCtx = useContext(TmzContext);
  const { setActiveTmzScroll, setToggleActiveIndex } = tmzCtx;

  const connectedCategory = sliceCategory(connectedTmz);

  const handleConnectedCategoryClick = e => {
    // Stop event propagation
    e.stopPropagation();

    setToggleActiveIndex(contentId);
    setActiveTmzScroll(true);
  };

  return (
    <div className="side-nav__tab" onClick={onToggle}>
      <a className="heading--secondary side-nav__tab__title">
        {category}
        {connectedCategory === category && (
          <span onClick={handleConnectedCategoryClick} className="side-nav__tab__title--active">
            Connected
          </span>
        )}
      </a>
      <HiChevronDown
        className={`side-nav__tab__arrow ${isActive ? "side-nav__tab__arrow--active" : ""}`}
      />
    </div>
  );
};

export default SideNavTmzContentCategory;
