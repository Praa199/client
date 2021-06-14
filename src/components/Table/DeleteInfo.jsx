import React from "react";
import { removeSingleBudget } from "../../services/data.input";
// import { removeSingleMonth } from "../../pages/ProtectedTable";

function removeBudget(id) {
  removeSingleBudget(id);
  // handleDelete(id);
}

function DeleteInfo({ singleMonthId, handleDelete, tableToggle }) {
  function deletion() {
    console.log(tableToggle);
    removeBudget({ singleMonthId });
    tableToggle();
    handleDelete(singleMonthId);
  }
  return (
    <div>
      <button onClick={() => deletion()}>Remove</button>
    </div>
  );
}

export default DeleteInfo;
