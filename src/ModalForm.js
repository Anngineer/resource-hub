import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function ModalForm(props) {
  const dropDownValue = props.dropDownValue;
  const [modalEmail, setModalEmail] = useState("");
  let formValue = "";
  function handleFormChange(e, data) {
    // e.preventDefault();
    formValue = data.value;
    console.log(formValue);
    // console.log(data.key);
  }

  function handleKeyPress(e, data) {
    //     let formValue = data.value;
    if (e.key === "Enter") {
      handleFormSubmit();
      console.log("Hit Enter!");
      console.log(`formvalue is ${formValue}`);
      //       setModalEmail(formValue);
    }
  }
  function handleFormSubmit() {
    setModalEmail(formValue);
  }

  if (modalEmail === "") {
    return (
      <div className="ModalForm">
        <Form.Group className="formGroup" floated="right">
          {modalEmail}
          <p> Sign up to recieve new blog posts!</p>

          <Form.Input
            placeholder="Email"
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e, data) => handleFormChange(e, data)}
            style={{ marginBottom: "1rem" }}
          />
          <Form.Button content="Submit" onClick={handleFormSubmit} />
        </Form.Group>
      </div>
    );
  } else {
    return <div className="ModalForm">Thank you so much for subscribing!</div>;
  }
}
export default ModalForm;
