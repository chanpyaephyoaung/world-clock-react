import SideNavTmzContentCategory from "./SideNavTmzContentCategory";
import SideNavTmzContentTmzs from "./SideNavTmzContentTmzs";

const DUMMY_TMZS = [
  {
    category: "Africa",
    timezones: ["Abidjan", "Accra", "Addis Ababa"],
  },
  {
    category: "America",
    timezones: ["Adak", "Anchorang", "Anguilla", "Antigua"],
  },
];

const SideNavTmzContent = () => {
  return DUMMY_TMZS.map(content => {
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
