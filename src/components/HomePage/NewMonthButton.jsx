import React from "react";
import { Button } from "bootstrap";

function NewMonthButton({ formToggle, setHomeFormState, homeFormState }) {
  return (
    <>
      <Button onClick={() => setHomeFormState()}> New</Button>
    </>
  );
}

export default NewMonthButton;
