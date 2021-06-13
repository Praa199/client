import React from "react";
import Table from "../Table/Table";

function BudgetInfo({ monthInfo, handleDelete }) {
  const [tableState, setTableState] = React.useState(false);

  function tableToggle() {
    setTableState(!tableState);
  }
  return (
    <div>
      <>
        <button onClick={tableToggle}>{monthInfo.month}</button>
      </>
      {tableState && (
        <Table singleMonthData={monthInfo} handleDelete={() => handleDelete} />
      )}
    </div>
  );
}

export default BudgetInfo;
