import { useContext } from "react";
import SideNavTmzContentCategory from "./SideNavTmzContentCategory";
import SideNavTmzContentTmzsWrapper from "./SideNavTmzContentTmzsWrapper";
import TmzContext from "../../store/tmz-context";

const SideNavTmzContent = () => {
  const tmzCtx = useContext(TmzContext);
  const { tmzData, toggleActiveIndex, setToggleActiveIndex } = tmzCtx;

  // const [toggleActiveIndex, setToggleActiveIndex] = useState();

  const handleOnToggle = id => {
    // Close all tmz content if the current active tab is clicked again
    if (toggleActiveIndex === id) {
      setToggleActiveIndex(0);
    }
    // Show respective tmz content
    else setToggleActiveIndex(id);
  };

  return tmzData.map(content => {
    return (
      <div key={content.id} className="side-nav__content">
        <SideNavTmzContentCategory
          contentId={content.id}
          category={content.category}
          isActive={toggleActiveIndex === content.id}
          connectedTmz={tmzCtx.currentTmz}
          onToggle={() => handleOnToggle(content.id)}
        />

        <SideNavTmzContentTmzsWrapper
          content={content}
          isActive={toggleActiveIndex === content.id}
          connectedTmz={tmzCtx.currentTmz}
        />
      </div>
    );
  });
};

export default SideNavTmzContent;
