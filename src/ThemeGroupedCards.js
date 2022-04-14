import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
// import filterByTags from "./filterByTags";
import ThemeCards from "./ThemeCards";

const ThemeGroupedCards = ({ themeName, themeTags, background }) => {
  // let practiceList = filterByTags(themeTags);
  return (
    <div
      className="themed-grouped-cards"
      style={{ backgroundColor: `${background}` }}
    >
      <h2>{themeName}</h2>
      {/* <p>Tags are: {themeTags.join(", ")}</p> */}
      <ThemeCards themeTags={themeTags} />
      {themeName === "Design & Scripting" && (
        <div className="link-wrapper">
          <Link
            className="see-more-link"
            to="/blogs/design-and-scripting"
            style={{ padding: "2rem" }}
          >
            more design &#38; scripting books <Icon name="angle double right" />
          </Link>
        </div>
      )}
      {themeName === "Programming" && (
        <div className="link-wrapper">
          <Link
            className="see-more-link"
            to="/blogs/programming"
            style={{ padding: "2rem" }}
          >
            more programming blogs <Icon name="angle double right" />
          </Link>
        </div>
      )}{" "}
      {themeName === "Math & Physics" && (
        <div className="link-wrapper">
          <Link
            className="see-more-link"
            to="/blogs/math-and-physics"
            style={{ padding: "2rem" }}
          >
            more math &#38; physics blogs <Icon name="angle double right" />
          </Link>
        </div>
      )}
      {themeName === "Organizational Tips" && (
        <div className="link-wrapper">
          <Link
            className="see-more-link"
            to="/blogs/organizational-tips"
            style={{ padding: "2rem" }}
          >
            more organizational tip blogs <Icon name="angle double right" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ThemeGroupedCards;
