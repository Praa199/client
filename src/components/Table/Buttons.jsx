import React from "react";
// import Table from "./Table";
// import { Link } from "react-router-dom";
import BudgetInfo from "./BudgetInfo";

function Buttons({ budgetArray, setBudgetArray }) {
  const [newBudgetArray, setNewBudgetArray] = React.useState([]);
  //   const [showTable, setShowTable] = React.useState(false);

  React.useEffect(() => {
    setNewBudgetArray(budgetArray);
    console.log(budgetArray);

    return () => console.log("Bye bye eeh");
  }, [budgetArray]);

  console.log("buttons**", newBudgetArray);

  return (
    <div>
      <h1>Months</h1>
      {newBudgetArray.map((singleMonth) => (
        <>
          <BudgetInfo
            monthInfo={singleMonth}
            setBudgetArray={setBudgetArray}
            budgetArray={budgetArray}
          />
          {/* <button onClick={tableToggle}>{singleMonth.month}</button>
          {showTable && <Table singleMonthData={singleMonth} />} */}
        </>
      ))}
    </div>
  );
}

export default Buttons;
