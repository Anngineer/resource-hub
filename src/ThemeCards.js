import filterByTags from "./filterByTags";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ThemeCards = ({ themeTags }) => {
  const themeList = filterByTags(themeTags);
  const fourThemeList = shortenThemeList(4);

  function shortenThemeList(cardNum) {
    if (themeList.length < cardNum) {
      const cardRowList = themeList;
      return cardRowList;
    } else {
      const cardRowList = themeList.slice(0, cardNum);
      //  console.log(cardRowList);
      return cardRowList;
    }
  }

  return (
    <div className="ThemeCards">
      {/* <h5>Group of cards with theme {theme}.</h5> */}

      {fourThemeList.map((book) => (
        <Card
          className="themeCard"
          key={book.key}
          as={Link}
          to={`/blogs/${book.key}`}
        >
          <Card.Content>
            <Card.Header className="book-eader">{book.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <p>{book.blurb}</p>
            <p>
              <b>Tags:</b> {book.tags.join(", ")}
            </p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default ThemeCards;
