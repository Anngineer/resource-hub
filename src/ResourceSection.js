import BlogCards from "./BlogCards";
import ThemeGroupedCards from "./ThemeGroupedCards";

const ResourceSection = ({ blogList, formValue }) => {
  // let allTitles = blogList.map((blog) => blog.title).join(", ");
  if (blogList.length === 0) {
    return (
      <div className="resource-section">
        {/* <h2>Resource Section</h2> */}
        {/* <p>Nothing is checked, so we're showing everything.</p> */}
        <ThemeGroupedCards
          themeName={"Design & Scripting"}
          themeTags={["CSS", "HTML", "Design"]}
          background={"#F9f9f9"}
          // background={"#f6f8f8"}
        />
        <ThemeGroupedCards
          themeName={"Programming"}
          themeTags={["Beginner Javascript", "Intermediate Javascript"]}
          background={"#ffffff"}
        />
        <ThemeGroupedCards
          themeName={"Math & Physics"}
          themeTags={[
            "Thermodynamics",
            "Fluid Dynamics",
            "Statics",
            "Kinematics",
          ]}
          background={"#F9f9f9"}
          // background={"#f6f8f8"}
        />
        <ThemeGroupedCards
          themeName={"Organizational Tips"}
          themeTags={["Focus", "Project Organization", "Time Management"]}
          background={"#ffffff"}
        />
      </div>
    );
  } else {
    return (
      <div className="resource-section">
        {/* <h3>Filtered Blogs:</h3> */}
        {/* <h2>Resource Section</h2> */}
        <h2>Showing: {formValue.join(", ")}</h2>
        {/* <p>The titles shown: {allTitles}</p> */}
        <div className="resource-page-filtered-blogs">
          <BlogCards blogList={blogList} />
        </div>
      </div>
    );
  }
};
export default ResourceSection;
