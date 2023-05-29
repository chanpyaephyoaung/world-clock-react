const SideNavTmzContentTmzs = ({ category, tmz }) => {
  // Replacing '_' with white space
  const tmzText = tmz.replaceAll("_", " ");
  return (
    <a className="side-nav__text side-nav__timezone" data-timezone={`${category}/${tmz}`}>
      {tmzText}
      <span className="side-nav__timezone--active"></span>
    </a>
  );
};

export default SideNavTmzContentTmzs;
