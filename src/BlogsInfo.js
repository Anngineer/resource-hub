import { useParams } from "react-router-dom";
import backend from "./backend";
import backendBody from "./backendBody";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const BlogsInfo = () => {
  const { id } = useParams();
  return (
    <div className="blog-info-page">
      <nav className="blog-home-nav">
        <Link to="/">HUB</Link>
      </nav>

      <div className="blog-section">
        <Link to={`/blogs/${backend[id - 1].theme[0]}`}>
          {backend[id - 1].theme[1]}
        </Link>
        <h1>{backend[id - 1].title}</h1>
        <h4>by {backend[id - 1].author}</h4>

        {/* <div className="blog-picture">Image Here</div> */}
        {/* <p>Preview: {backend[id - 1].blurb}</p> */}
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
        {/* <div>{backend[id - 1].body}</div> */}
        {/* <p>Tags: {backend[id - 1].tags.join(", ")}</p> */}
        <div className="blog-info-more-link-wrapper">
          <Link to={`/blogs/${backend[id - 1].theme[0]}`}>
            See more {backend[id - 1].theme[1]}{" "}
            <Icon name="angle double right" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogsInfo;
