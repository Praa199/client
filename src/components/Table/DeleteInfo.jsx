import React from "react";
import { removeSingleBudget } from "../../services/data.input";
// import { removeSingleMonth } from "../../pages/ProtectedTable";

function removeBudget(id) {
  removeSingleBudget(id);
  // handleDelete;
}

function DeleteInfo({ singleMonthId, handleDelete }) {
  function deletion() {
    removeBudget({ singleMonthId });
    handleDelete();
  }
  return (
    <div>
      <button onClick={deletion()}>Remove</button>
    </div>
  );
}

export default DeleteInfo;
