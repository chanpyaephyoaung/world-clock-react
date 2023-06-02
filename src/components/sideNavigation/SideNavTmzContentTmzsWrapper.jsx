import SideNavTmzContentTmzs from "./SideNavTmzContentTmzs";

const SideNavTmzContentTmzsWrapper = ({ content, isActive, connectedTmz }) => {
  return (
    <div className={`side-nav__tab__content ${!isActive ? "hidden" : ""}`}>
      {content.timezones.map(tmz => (
        <SideNavTmzContentTmzs key={tmz} tmz={tmz} isActiveTmz={connectedTmz === tmz} />
      ))}
    </div>
  );
};

export default SideNavTmzContentTmzsWrapper;
