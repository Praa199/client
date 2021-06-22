import React from "react";
import { Button } from "react-bootstrap";

function BudgetInfo({
  monthInfo,
  tableToggle,
  setSingleBudgetObject,
  setEditInfoState,
}) {
  function handleClick() {
    tableToggle();
    setSingleBudgetObject(monthInfo);
    setEditInfoState();
  }
  return (
    <div>
      <>
        <Button onClick={() => handleClick()} variant="primary" type="submit">
          {monthInfo.month}
        </Button>
      </>
    </div>
  );
}

export default BudgetInfo;
