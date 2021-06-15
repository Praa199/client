import React from "react";
import Table from "../Table/Table";

function BudgetInfo({ monthInfo, handleDelete, setBudgetArray, budgetArray }) {
  const [tableState, setTableState] = React.useState(false);

  function tableToggle() {
    tableState ? setTableState(false) : setTableState(true);
  }
  return (
    <div>
      <>
        <button onClick={tableToggle}>{monthInfo.month}</button>
      </>
      {tableState && (
        <Table
          singleMonthData={monthInfo}
          tableToggle={() => tableToggle()}
          handleDelete={() => handleDelete()}
          setBudgetArray={setBudgetArray}
          budgetArray={budgetArray}
        />
      )}
    </div>
  );
}

export default BudgetInfo;
