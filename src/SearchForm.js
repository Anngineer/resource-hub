import { Form } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";
import backend from "./backend";
import createTags from "./createTags";
import { Button, Icon } from "semantic-ui-react";
import { useState } from "react";

const SearchForm = ({ setBlogList, setFormValue, formValue }) => {
  const tagList = createTags();
  // console.log("tagList", tagList);
  const [formHidden, setFormHidden] = useState(true);
  const handleForm = () => {
    setFormHidden(!formHidden);
  };

  function handleCheckBoxChange(e, v, tag) {
    // console.log(e);
    // console.log(tag);
    // console.log(v.checked);

    if (v.checked) {
      let newValue = formValue.concat(tag);
      // console.log({ newValue });
      setFormValue(newValue);
      handleBlogList(newValue);
    } else {
      let newValue = formValue;
      const index = newValue.indexOf(tag);
      // console.log(`index is ${index}`);

      if (index > -1) {
        if (newValue.length === 1) {
          setFormValue([]);
          newValue = [];
          handleBlogList(newValue);
        } else {
          newValue.splice(index, 1);
          // console.log(`newValue is ${newValue}`);
          // console.dir(newValue);
          setFormValue([...newValue]);
          newValue = [...newValue];
          handleBlogList(newValue);
        }
      }
    }
  }
  function handleBlogList(newValue) {
    let newBlogList = [];
    if (newValue.length === 0) {
      setBlogList(newBlogList);
    } else {
      for (const tag of newValue) {
        for (const blog of backend) {
          let objectTags = blog.tags;
          if (objectTags.includes(tag)) {
            // console.log(`${blog.title} has the tag ${tag}`);
            if (!newBlogList.includes(blog)) {
              newBlogList = [blog, ...newBlogList];
            }
          } else {
            // console.log(`${blog.title} does not have the tag ${tag}`);
          }
          setBlogList(newBlogList);
          // console.log(objectTags.join(", "));
        }
      }
    }
  }

  // console.log({ formValue });

  return (
    <div className="search-section">
      <h1>Resources</h1>

      <h3 onClick={() => handleForm()}>
        Filter Blogs
        <div className="description-word"> by Topic</div>{" "}
        {formHidden && (
          <>
            <Button
              icon
              // onClick={() => setFormHidden(false)}
              alt={"Show filter options"}
              style={{ background: "none", padding: "5px" }}
            >
              <Icon name="caret square right outline" />
            </Button>
            <div
              className="filter-underline"
              style={{
                marginBottom: "2rem",
              }}
            ></div>
          </>
        )}
        {!formHidden && (
          <>
            <Button
              icon
              // onClick={() => setFormHidden(true)}
              alt={"Hide filter options"}
              style={{ background: "none", padding: "5px" }}
            >
              <Icon name="caret square down outline" />
            </Button>
            <div className="filter-underline"></div>
          </>
        )}
      </h3>

      {!formHidden && (
        <Form className="search-form">
          {tagList.map((tag) => (
            <div className="checkbox-item">
              <Checkbox
                key={tag}
                className="checkbox"
                // label={tag}
                onChange={(e, v) => handleCheckBoxChange(e, v, tag)}
              />{" "}
              {tag}
            </div>
          ))}
        </Form>
      )}
    </div>
  );
};
export default SearchForm;
