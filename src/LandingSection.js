// import filterByTags from "./filterByTags";

import IAmDropdown from "./IAmDropdown";

const LandingSection = () => {
  // const practiceList = filterByTags(["CSS", "HTML"]);
  return (
    <div className="landing-section">
      <h1>Resource Hub</h1>
      <h2>Explore and Learn</h2>
      <p>
        An information center for curious adults who have busy lives. Choose an
        option for a suggestion!{" "}
      </p>
      <IAmDropdown />
    </div>
  );
};
export default LandingSection;
