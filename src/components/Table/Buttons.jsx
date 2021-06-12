import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import BudgetInfo from "../BudgetInfo";

function Buttons(props) {
  const [budgetArray, setBudgetArray] = React.useState([]);
  const [showTable, setShowTable] = React.useState(false);

  React.useEffect(() => {
    setBudgetArray(props.budgetArray);
    console.log(props.budgetArray);

    return () => console.log("Bye bye eeh");
  }, [props.budgetArray]);

  console.log("buttons**", budgetArray);
  return (
    <div>
      <h1>tables</h1>
      {budgetArray.map((singleMonth) => (
        <>
          <BudgetInfo monthInfo={singleMonth} />
          {/* <button onClick={tableToggle}>{singleMonth.month}</button>
          {showTable && <Table singleMonthData={singleMonth} />} */}
        </>
      ))}
    </div>
  );
}

export default Buttons;
