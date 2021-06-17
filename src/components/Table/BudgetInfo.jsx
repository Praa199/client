import React from "react";
import Table from "../Table/Table";
import EditInfo from "./EditInfo";
import { Button } from "react-bootstrap";

function BudgetInfo({
  monthInfo,
  setBudgetArray,
  budgetArray,
  // editTable,
  handleUpdate,
}) {
  const [tableState, setTableState] = React.useState(false);
  const [editInfoState, setEditInfoState] = React.useState(false);

  function tableToggle() {
    tableState ? setTableState(false) : setTableState(true);
  }

  function editTable() {
    editInfoState ? setEditInfoState(false) : setEditInfoState(true);

    console.log("this button edits the table");
  }

  function saveUpdatedInfo() {
    console.log("data was saved");
    handleUpdate();
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
          editTable={() => editTable()}
        />
      )}

      {editInfoState && (
        <EditInfo
          singleMonthData={monthInfo}
          saveUpdatedInfo={saveUpdatedInfo()}
          setBudgetArray={setBudgetArray}
          budgetArray={budgetArray}
        />
      )}
    </div>
  );
}

export default BudgetInfo;
