import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BlogCards = ({ blogList }) => {
  return (
    <div className="blog-cards">
      {blogList.map((book) => (
        <Card
          // className="card"
          key={book.key}
          as={Link}
          to={`/blogs/${book.key}`}
        >
          <Card.Content className="card-header">
            <Card.Header className="blog-header">{book.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <p className="blurb">{book.blurb}</p>
            <p>
              <b>Tags:</b> {book.tags.join(", ")}
            </p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default BlogCards;
