import { useContext, useEffect } from "react";
import TmzContext from "../../store/tmz-context";
import { sliceZoneName } from "../../utils/timezones";

const SideNavTmzContentTmzs = ({ tmz, isActiveTmz }) => {
  const tmzCtx = useContext(TmzContext);
  const { scrollToActiveTmz, setActiveTmzScroll } = tmzCtx;

  useEffect(() => {
    const activeTmzEl = document.querySelector(".side-nav__timezone.active");
    if (!isActiveTmz || !scrollToActiveTmz) return;
    console.log("Scrolled!");
    setActiveTmzScroll(false);
    activeTmzEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [scrollToActiveTmz, isActiveTmz]);

  // Replacing '_' with white space
  const tmzText = sliceZoneName(tmz).replaceAll("_", " ");

  const handleTmzClick = () => {
    // Change Timezone
    tmzCtx.setTmz(tmz);
  };

  return (
    <a
      className={`side-nav__text side-nav__timezone ${isActiveTmz ? "active" : ""}`}
      onClick={handleTmzClick}
    >
      {tmzText}
      {isActiveTmz && <span className="side-nav__timezone--active"></span>}
    </a>
  );
};

export default SideNavTmzContentTmzs;
