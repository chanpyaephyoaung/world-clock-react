const SideNavTmzContentTmzs = ({ tmz, onTabConnect, isActiveTmz, onChangeTmz }) => {
  // Replacing '_' with white space
  const tmzText = tmz.replaceAll("_", " ");

  const handleTmzClick = () => {
    onTabConnect();
    onChangeTmz(tmz);
  };
  return (
    <a className="side-nav__text side-nav__timezone" onClick={handleTmzClick}>
      {tmzText}
      {isActiveTmz && <span className="side-nav__timezone--active"></span>}
    </a>
  );
};

export default SideNavTmzContentTmzs;
