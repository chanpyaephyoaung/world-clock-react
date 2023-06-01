import { useContext, useState } from "react";
import SideNavTmzContentCategory from "./SideNavTmzContentCategory";
import SideNavTmzContentTmzsWrapper from "./SideNavTmzContentTmzsWrapper";
import TmzContext from "../../store/tmz-context";

const SideNavTmzContent = ({ tmzData }) => {
  const tmzCtx = useContext(TmzContext);

  const [toggleActiveIndex, setToggleActiveIndex] = useState();
  const [connectedTmzTabIndex, setConnectedTmzTabIndex] = useState();

  const handleShowTmzContent = id => {
    // Close all tmz content if the current active tab is clicked again
    if (toggleActiveIndex === id) setToggleActiveIndex(0);
    // Show respective tmz content
    else setToggleActiveIndex(id);
  };

  return tmzData.map(content => {
    return (
      <div key={content.id} className="side-nav__content">
        <SideNavTmzContentCategory
          category={content.category}
          isActive={toggleActiveIndex === content.id}
          isTabConnected={connectedTmzTabIndex === content.id}
          onShow={() => handleShowTmzContent(content.id)}
        />

        <SideNavTmzContentTmzsWrapper
          content={content}
          isActive={toggleActiveIndex === content.id}
          onTabConnect={() => setConnectedTmzTabIndex(toggleActiveIndex)}
          connectedTmz={tmzCtx.connectedTmz}
        />
      </div>
    );
  });
};

export default SideNavTmzContent;
