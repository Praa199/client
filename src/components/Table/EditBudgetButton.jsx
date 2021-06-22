import React from "react";
import { Button } from "react-bootstrap";

function EditBudgetButton({ tableToggle, editTableToggle }) {
  function clickListener() {
    tableToggle();
    editTableToggle();
  }

  return (
    <>
      <Button onClick={() => clickListener()}> Edit </Button>
    </>
  );
}

export default EditBudgetButton;
