import React from "react";

function EditBudgetButton({ tableToggle, editTable }) {
  function clickListener() {
    tableToggle();
    editTable();
  }

  return (
    <>
      <button onClick={() => clickListener()}> Edit </button>
    </>
  );
}

export default EditBudgetButton;
