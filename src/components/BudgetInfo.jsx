import React from "react";
import Table from "../components/Table/Table";

function BudgetInfo({ monthInfo }) {
  const [tableState, setTableState] = React.useState(false);

  function tableToggle() {
    setTableState(!tableState);
  }
  return (
    <div>
      <button onClick={tableToggle}>{monthInfo.month}</button>
      {tableState && <Table singleMonthData={monthInfo} />}
    </div>
  );
}

export default BudgetInfo;
