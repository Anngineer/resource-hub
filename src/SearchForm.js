import { Form } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";
import backend from "./backend";
import createTags from "./createTags";

const SearchForm = ({ setBlogList, setFormValue, formValue }) => {
  const tagList = createTags();
  // console.log("tagList", tagList);

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
      <h3>Filter Blogs by Topic</h3>

      <Form className="form">
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
    </div>
  );
};
export default SearchForm;
