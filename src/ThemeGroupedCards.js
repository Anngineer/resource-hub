import { Link } from "react-router-dom";
// import filterByTags from "./filterByTags";
import ThemeCards from "./ThemeCards";

const ThemeGroupedCards = ({ themeName, themeTags, background }) => {
  // let practiceList = filterByTags(themeTags);
  return (
    <div
      className="themed-grouped-cards"
      style={{ backgroundColor: `${background}` }}
    >
      <h3 style={{ marginTop: "2rem" }}>{themeName}</h3>
      <p>Tags are: {themeTags.join(", ")}</p>
      <ThemeCards themeTags={themeTags} />
      {themeName === "Design & Scripting" && (
        <Link to="/blogs/design-and-scripting" style={{ padding: "2rem" }}>
          more design &#38; scripting books
        </Link>
      )}
      {themeName === "Programming" && (
        <Link to="/blogs/programming" style={{ padding: "2rem" }}>
          more programming blogs
        </Link>
      )}{" "}
      {themeName === "Math & Physics" && (
        <Link to="/blogs/math-and-physics" style={{ padding: "2rem" }}>
          more math &#38; physics blogs
        </Link>
      )}
      {themeName === "Organizational Tips" && (
        <Link to="/blogs/organizational-tips" style={{ padding: "2rem" }}>
          more organizational tip blogs
        </Link>
      )}
    </div>
  );
};

export default ThemeGroupedCards;
