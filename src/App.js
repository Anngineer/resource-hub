import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import BlogsInfo from "./BlogsInfo";
import Home from "./Home";
import { useState } from "react";
import ThemePage from "./ThemePage";

function App() {
  const [blogList, setBlogList] = useState([]);
  const [formValue, setFormValue] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav-menu">
          <Link to="/" style={{ padding: "2rem" }}>
            Home
          </Link>
          <Link to="/blogs/1" style={{ padding: "2rem" }}>
            Blog 1
          </Link>
          <Link to="/blogs/2" style={{ padding: "2rem" }}>
            Blog 2
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                blogList={blogList}
                setBlogList={setBlogList}
                formValue={formValue}
                setFormValue={setFormValue}
              />
            }
          />
          {/* Have a route with cards for the top four main Topics, ex:  /resource-group/design-and-scripting */}
          <Route path="/blogs/:id" element={<BlogsInfo />}></Route>
          <Route
            path="/blogs/design-and-scripting"
            element={
              <ThemePage
                themeName={"Design and Scripting"}
                themeTags={["CSS", "HTML", "Design"]}
              />
            }
          ></Route>
          <Route
            path="/blogs/programming"
            element={
              <ThemePage
                themeName={"Programming"}
                themeTags={["Beginner Javascript", "Intermediate Javascript"]}
              />
            }
          ></Route>
          <Route
            path="/blogs/math-and-physics"
            element={
              <ThemePage
                themeName={"Math and Physics"}
                themeTags={[
                  "Thermodynamics",
                  "Fluid Dynamics",
                  "Statics",
                  "Kinematics",
                ]}
              />
            }
          ></Route>
          <Route
            path="/blogs/organizational-tips"
            element={
              <ThemePage
                themeName={"Organizational Tips"}
                themeTags={["Focus", "Project Organization", "Time Management"]}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
