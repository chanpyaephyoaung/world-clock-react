import { useState } from "react";
import SideNavTmzContentCategory from "./SideNavTmzContentCategory";
import SideNavTmzContentTmzsWrapper from "./SideNavTmzContentTmzsWrapper";

const SideNavTmzContent = ({ tmzData }) => {
  const [toggleActiveIndex, setToggleActiveIndex] = useState();
  const [connectedTmzTabIndex, setConnectedTmzTabIndex] = useState();
  const [connectedTmz, setConnectedTmz] = useState();

  const showTmzContentHanlder = id => {
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
          onShow={() => showTmzContentHanlder(content.id)}
        />

        <SideNavTmzContentTmzsWrapper
          content={content}
          isActive={toggleActiveIndex === content.id}
          onTabConnect={() => setConnectedTmzTabIndex(toggleActiveIndex)}
          connectedTmz={connectedTmz}
          onChangeTmz={tmz => setConnectedTmz(tmz)}
        />
      </div>
    );
  });
};

export default SideNavTmzContent;
