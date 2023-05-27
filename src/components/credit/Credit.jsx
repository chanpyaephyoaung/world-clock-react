import "../../scss/credit.scss";
import themes from "../../data/themes";

const Credit = ({ themeCount }) => {
  return (
    <footer>
      <p className="footer__credit" style={{ color: themes[themeCount].creditColor }}>
        Made With <span className="footer__credit--heart">❤</span> By CPPA
      </p>
    </footer>
  );
};

export default Credit;
