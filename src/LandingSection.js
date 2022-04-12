// import filterByTags from "./filterByTags";

import HomeNavBar from "./HomeNavBar";
import IAmDropdown from "./IAmDropdown";

const LandingSection = () => {
  // const practiceList = filterByTags(["CSS", "HTML"]);
  return (
    <div className="landing-section">
      <div class="border">
        <HomeNavBar />
        <div className="intro-block">
          <h1>Resource Hub</h1>
          <h2>Explore and Learn</h2>
          <p>
            An information center for curious adults who have busy lives. Choose
            an option for a suggestion!{" "}
          </p>
          <div className="dropdown-container">
            <IAmDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
