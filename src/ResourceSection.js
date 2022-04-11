import BlogCards from "./BlogCards";
import ThemeGroupedCards from "./ThemeGroupedCards";

const ResourceSection = ({ blogList, formValue }) => {
  // let allTitles = blogList.map((blog) => blog.title).join(", ");
  if (blogList.length === 0) {
    return (
      <div className="resource-section">
        <h2>Resource Section</h2>
        <p>Nothing is checked, so we're showing everything.</p>
        <ThemeGroupedCards
          themeName={"Design & Scripting"}
          themeTags={["CSS", "HTML", "Design"]}
        />
        <ThemeGroupedCards
          themeName={"Programming"}
          themeTags={["Beginner Javascript", "Intermediate Javascript"]}
        />
        <ThemeGroupedCards
          themeName={"Math & Physics"}
          themeTags={[
            "Thermodynamics",
            "Fluid Dynamics",
            "Statics",
            "Kinematics",
          ]}
        />
        <ThemeGroupedCards
          themeName={"Organizational Tips"}
          themeTags={["Focus", "Project Organization", "Time Management"]}
        />
      </div>
    );
  } else {
    return (
      <div className="resource-section">
        <h2>Resource Section</h2>
        <p>The topics checked: {formValue.join(", ")}</p>
        {/* <p>The titles shown: {allTitles}</p> */}
        <BlogCards blogList={blogList} />
      </div>
    );
  }
};
export default ResourceSection;
