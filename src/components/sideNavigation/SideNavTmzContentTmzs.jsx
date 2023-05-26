const SideNavTmzContentTmzs = ({ category, tmz }) => {
  return (
    <a className="side-nav__text side-nav__timezone" data-timezone={`${category}/${tmz}`}>
      {tmz}
      <span className="side-nav__timezone--active"></span>
    </a>
  );
};

export default SideNavTmzContentTmzs;
