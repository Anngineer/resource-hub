import BlogCards from "./BlogCards";
import filterByTags from "./filterByTags";

const ThemePage = ({ themeTags, themeName }) => {
  const themedBlogList = filterByTags(themeTags);
  return (
    <div>
      <h1>Themed Page: {themeName}</h1>
      <BlogCards blogList={themedBlogList} />
    </div>
  );
};

export default ThemePage;
