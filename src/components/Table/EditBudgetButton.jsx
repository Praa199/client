import React from "react";
import { Button } from "react-bootstrap";

function EditBudgetButton({ tableToggle, editTableToggle }) {
  function clickListener() {
    tableToggle();
    editTableToggle();
  }

  return (
    <>
      <Button variant="outline-info" onClick={() => clickListener()}>
        {" "}
        Edit{" "}
      </Button>
    </>
  );
}

export default EditBudgetButton;
