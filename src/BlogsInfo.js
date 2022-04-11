import { useParams } from "react-router-dom";
import backend from "./backend";
import backendBody from "./backendBody";

const BlogsInfo = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>{backend[id - 1].title}</h2>
      <p>by {backend[id - 1].author}</p>

      <div className="blog-picture">Image Here</div>
      <p>Preview: {backend[id - 1].blurb}</p>
      <p
        style={{
          textAlign: "left",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {backendBody}
      </p>
      <div>{backend[id - 1].body}</div>
      <p>Tags: {backend[id - 1].tags.join(", ")}</p>
    </div>
  );
};
export default BlogsInfo;
