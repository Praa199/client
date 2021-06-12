import React from "react";
import { removeSingleBudget } from "../../services/data.input";

function removeBudget(id) {
  removeSingleBudget(id);
}

function DeleteInfo({ singleMonthId }) {
  return (
    <div>
      <button onClick={() => removeBudget({ singleMonthId })}>Remove</button>
    </div>
  );
}

export default DeleteInfo;
