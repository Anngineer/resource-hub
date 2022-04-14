// import filterByTags from "./filterByTags";

import HomeNavBar from "./HomeNavBar";
import IAmDropdown from "./IAmDropdown";

const LandingSection = () => {
  // const practiceList = filterByTags(["CSS", "HTML"]);
  return (
    <div className="landing-section">
      <div className="border">
        <div className="intro-block">
          <h1>Resource Hub</h1>
          <h2>Explore and Learn</h2>
          <p>
            An information center for curious adults who have busy lives.
            Resource Hub takes the pressure (that's force per unit area) out of
            learning STEM.{" "}
          </p>
          <p>Choose an option for a suggestion! </p>
          <div className="dropdown-container">
            <IAmDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
