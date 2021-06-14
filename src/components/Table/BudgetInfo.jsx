import React from "react";
import Table from "../Table/Table";

function BudgetInfo({ monthInfo, handleDelete }) {
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
        />
      )}
    </div>
  );
}

export default BudgetInfo;
