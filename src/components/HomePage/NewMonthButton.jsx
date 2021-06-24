import React from "react";
import { Button } from "react-bootstrap";

function NewMonthButton({ formToggle, setHomeFormState, homeFormState }) {
  return (
    <>
      <Button onClick={() => formToggle()}> New</Button>
    </>
  );
}

export default NewMonthButton;
