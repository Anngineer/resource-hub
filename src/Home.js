import LandingSection from "./LandingSection";
import ResourceSection from "./ResourceSection";
import SearchForm from "./SearchForm";
const Home = ({ blogList, setBlogList, formValue, setFormValue }) => {
  return (
    <div>
      <LandingSection />
      {/* <hr /> */}
      <SearchForm
        setBlogList={setBlogList}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      {/* <hr /> */}
      <ResourceSection
        blogList={blogList}
        setBlogList={setBlogList}
        formValue={formValue}
      />
    </div>
  );
};

export default Home;
