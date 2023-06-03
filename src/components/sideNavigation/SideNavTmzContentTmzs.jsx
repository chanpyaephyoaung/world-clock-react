import { useContext } from "react";
import TmzContext from "../../store/tmz-context";
import { sliceZoneName } from "../../utils/timezones";

const SideNavTmzContentTmzs = ({ tmz, isActiveTmz }) => {
  const tmzCtx = useContext(TmzContext);

  // Replacing '_' with white space
  const tmzText = sliceZoneName(tmz).replaceAll("_", " ");

  const handleTmzClick = () => {
    // Change Timezone
    tmzCtx.setTmz(tmz);
  };

  return (
    <a className="side-nav__text side-nav__timezone" onClick={handleTmzClick}>
      {tmzText}
      {isActiveTmz && <span className="side-nav__timezone--active"></span>}
    </a>
  );
};

export default SideNavTmzContentTmzs;
