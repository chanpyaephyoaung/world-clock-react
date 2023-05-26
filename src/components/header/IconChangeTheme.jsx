import { useEffect, useMemo, useRef, useState } from "react";
import "../../scss/icons.scss";
import animateIconChangeTheme from "../../utils/animateIconChangeTheme";

const IconChangeTheme = () => {
  const [counter, setCounter] = useState(0);
  const modifyIconLine1 = useRef(null);
  const modifyIconLine2 = useRef(null);
  const modifyIconLine3 = useRef(null);

  const iconChangeThemeOption = useMemo(
    () => ({
      counter: counter,
      elements: [modifyIconLine1.current, modifyIconLine2.current, modifyIconLine3.current],
      updateCounter: () => setCounter(c => c + 1),
      resetCounter: () => setCounter(-1),
    }),
    [counter]
  );

  // To animate when the counter value is incremented to 1 from 0
  useEffect(() => {
    if (counter === 1) {
      animateIconChangeTheme(iconChangeThemeOption);
    } else {
      return;
    }
  }, [counter, iconChangeThemeOption]);

  const clickHandler = () => {
    animateIconChangeTheme(iconChangeThemeOption);
  };

  return (
    <div onClick={clickHandler} className="header__icon-wrapper modify-icon">
      <span ref={modifyIconLine1} className="modify-icon__line modify-icon__line--1"></span>
      <span ref={modifyIconLine2} className="modify-icon__line modify-icon__line--2"></span>
      <span ref={modifyIconLine3} className="modify-icon__line modify-icon__line--3"></span>
    </div>
  );
};

export default IconChangeTheme;
