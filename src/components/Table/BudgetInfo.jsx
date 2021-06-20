import React from "react";
import Table from "../Table/Table";
import EditInfo from "./EditInfo";
import { Button } from "react-bootstrap";

function BudgetInfo({
  monthInfo,
  setBudgetArray,
  budgetArray,
  // editTableToggle,
  handleUpdate,
}) {
  const [tableState, setTableState] = React.useState(false);
  const [editInfoState, setEditInfoState] = React.useState(false);

  function tableToggle() {
    !tableState ? setTableState(true) : setTableState(false);
  }

  function editTableToggle() {
    !editInfoState ? setEditInfoState(true) : setEditInfoState(false);

    console.log("this button edits the table");
  }

  return (
    <div>
      <>
        <Button onClick={tableToggle} variant="primary" type="submit">
          {monthInfo.month}
        </Button>
      </>
      {tableState && (
        <Table
          singleMonthData={monthInfo}
          tableToggle={() => tableToggle()}
          setBudgetArray={setBudgetArray}
          budgetArray={budgetArray}
          editTableToggle={() => editTableToggle()}
        />
      )}

      {editInfoState && (
        <EditInfo
          singleMonthData={monthInfo}
          setBudgetArray={setBudgetArray}
          budgetArray={budgetArray}
          editTableToggle={() => editTableToggle()}
        />
      )}
    </div>
  );
}

export default BudgetInfo;
