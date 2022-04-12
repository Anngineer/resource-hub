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
      value: {
        tags: ["Beginner Javascript", "Intermediate Javascript"],
        theme: "programming",
      },
    },
    {
      key: "design-and-scripting",
      text: "a fan of art and design.",
      value: { tags: ["HTML", "CSS", "Design"], theme: "design-and-scripting" },
    },
    {
      key: "math-and-physics",
      text: "keen on science and math.",
      value: {
        tags: ["Thermodynamics", "Fluid Dynamics", "Statics", "Kinematics"],
        theme: "math-and-physics",
      },
    },
    {
      key: "organizational-tips",
      text: "a bit chaotic!",
      value: {
        tags: ["Focus", "Project Organization", "Time Management"],
        theme: "organizational-tips",
      },
    },
  ];
  function handleDropDownSelect(event, data) {
    console.log(data.value);
    setDropDownValue(data.value.tags);
    setDropDownTheme(data.value.theme);
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
