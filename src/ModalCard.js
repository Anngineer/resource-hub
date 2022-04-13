import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import backend from "./backend";
import filterByTags from "./filterByTags";
import { Link } from "react-router-dom";

function ModalCard(props) {
  const dropDownValue = props.dropDownValue;
  const dropDownTheme = props.dropDownTheme;

  const themeBlogList = filterByTags(dropDownValue);
  const randomIndex = Math.floor(Math.random() * themeBlogList.length);
  console.log(randomIndex, themeBlogList[randomIndex]);
  const chosenBlog = themeBlogList[randomIndex];
  return (
    <>
      <Card as={Link} to={`/blogs/${chosenBlog.key}`}>
        <Card.Content header={chosenBlog.title} />
        <Card.Content
          description={
            <>
              {chosenBlog.blurb}
              <Icon name="caret right" />
            </>
          }
        />
      </Card>
      <Card as={Link} to={`/blogs/${dropDownTheme}`}>
        <Card.Content extra>
          {/* <Icon name="caret right" /> */}
          {dropDownTheme === "design-and-scripting" && (
            <>
              <p>
                Or see more Design and Scripting blogs{" "}
                <Icon name="caret right" />{" "}
              </p>
              {/* <div class="flex">
                {" "}
                <Icon name="caret right" />
              </div> */}
            </>
          )}
          {dropDownTheme === "programming" && (
            <p>
              Or see more Programming blogs <Icon name="caret right" />
            </p>
          )}
          {dropDownTheme === "math-and-physics" && (
            <p>
              Or see more Math and Physics blogs
              <Icon name="caret right" />
            </p>
          )}
          {dropDownTheme === "organizational-tips" && (
            <p>
              Or see more Organizational Tips blogs
              <Icon name="caret right" />
            </p>
          )}
        </Card.Content>
      </Card>
    </>
  );
}
export default ModalCard;
