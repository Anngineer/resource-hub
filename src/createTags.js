import backend from "./backend";

export default function createTags() {
  let tagList = [];

  for (const blog of backend) {
    const tags = blog.tags;
    for (const tag of tags) {
      // console.log(tag);
      if (!tagList.includes(tag)) {
        tagList.push(tag);
      }
    }
  }
  // console.log(tagList);
  return tagList;
}
