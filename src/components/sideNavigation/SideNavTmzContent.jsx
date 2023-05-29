import SideNavTmzContentCategory from "./SideNavTmzContentCategory";
import SideNavTmzContentTmzs from "./SideNavTmzContentTmzs";

const SideNavTmzContent = ({ tmzData }) => {
  return tmzData.map(content => {
    return (
      <div key={content.category} className="side-nav__content">
        <SideNavTmzContentCategory category={content.category} />

        <div className="side-nav__tab__content hide">
          {content.timezones.map(tmz => (
            <SideNavTmzContentTmzs key={tmz} category={content.category} tmz={tmz} />
          ))}
        </div>
      </div>
    );
  });
};

export default SideNavTmzContent;
