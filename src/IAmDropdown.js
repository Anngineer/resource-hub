import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import IntroModal from "./IntroModal";
function IAmDropdown() {
  // DROPDOWN
  const [dropDownValue, setDropDownValue] = useState("");
  const [dropDownTheme, setDropDownTheme] = useState("");

  const bookTypeOptions = [
    {
      key: "programming",
      text: "looking to learn programming.",
      value: "programming, Beginner Javascript, Intermediate Javascript",
    },
    {
      key: "design-and-scripting",
      text: "a fan of art and design.",
      value: "design-and-scripting, HTML, CSS, Design",
    },
    {
      key: "math-and-physics",
      text: "keen on science and math.",
      value:
        "math-and-physics, Thermodynamics, Fluid Dynamics, Statics, Kinematics",
    },
    {
      key: "organizational-tips",
      text: "a bit chaotic!",
      value:
        "organizational-tips, Focus, Project Organization, Time Management",
    },
  ];
  function handleDropDownSelect(event, data) {
    console.log(data.value);
    let dataArray = data.value.split(", ");
    const theme = dataArray.shift(1);
    setDropDownValue(dataArray);
    setDropDownTheme(theme);
    handleOpenDisplayModel();
  }

  // INTRO MODAL
  const [displayModal, setDisplayModal] = useState(false);
  const handleOpenDisplayModel = () => {
    setDisplayModal(true);
  };
  const handleCloseDisplayModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <Dropdown
        className="Dropdown"
        text="I am..."
        selection
        options={bookTypeOptions}
        onChange={(event, data) => {
          handleDropDownSelect(event, data);
          //   handleOpenDisplayModel();
        }}
      />
      <IntroModal
        dropDownValue={dropDownValue}
        dropDownTheme={dropDownTheme}
        displayModal={displayModal}
        onOpenDisplayModal={handleOpenDisplayModel}
        onCloseDisplayModal={handleCloseDisplayModal}
      />
    </>
  );
}
export default IAmDropdown;
