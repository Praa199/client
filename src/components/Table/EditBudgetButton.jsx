import React from "react";

function EditBudgetButton({ tableToggle, editTableToggle }) {
  function clickListener() {
    tableToggle();
    editTableToggle();
  }

  return (
    <>
      <button onClick={() => clickListener()}> Edit </button>
    </>
  );
}

export default EditBudgetButton;
