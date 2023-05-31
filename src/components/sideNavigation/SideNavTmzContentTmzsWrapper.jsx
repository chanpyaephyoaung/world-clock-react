import SideNavTmzContentTmzs from "./SideNavTmzContentTmzs";

const SideNavTmzContentTmzsWrapper = ({
  timezones,
  isActive,
  onTabConnect,
  connectedTmz,
  onChangeTmz,
}) => {
  return (
    <div className={`side-nav__tab__content ${!isActive ? "hidden" : ""}`}>
      {timezones.map(tmz => (
        <SideNavTmzContentTmzs
          key={tmz}
          tmz={tmz}
          onTabConnect={onTabConnect}
          onChangeTmz={tmz => onChangeTmz(tmz)}
          isActiveTmz={connectedTmz === tmz}
        />
      ))}
    </div>
  );
};

export default SideNavTmzContentTmzsWrapper;
