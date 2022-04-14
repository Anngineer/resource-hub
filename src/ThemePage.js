import BlogCards from "./BlogCards";
import filterByTags from "./filterByTags";
import HomeNavBar from "./HomeNavBar";
import { Link } from "react-router-dom";

const ThemePage = ({ themeTags, themeName }) => {
  const themedBlogList = filterByTags(themeTags);
  return (
    <div className="theme-page">
      <nav className="blog-home-nav">
        <Link to="/">HUB</Link>
      </nav>
      <div className="theme-page-body">
        <h1>{themeName}</h1>
        <BlogCards blogList={themedBlogList} />
      </div>
    </div>
  );
};

export default ThemePage;
