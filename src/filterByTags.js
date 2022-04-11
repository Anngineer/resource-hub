import backend from "./backend";

const filterByTags = (themeTags) => {
  let List = [];

  for (const tag of themeTags) {
    let newList = backend.filter((blog) => blog.tags.includes(tag));
    let mixedList = List.concat(newList);
    let filteredList = mixedList.filter(
      (item, pos) => mixedList.indexOf(item) === pos
    );
    // console.log("Filtered List:", filteredList);
    List = filteredList;
  }

  return List;
  //
};
export default filterByTags;
