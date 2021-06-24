import React from "react";
// import Table from "./Table";
// import { Link } from "react-router-dom";
import BudgetInfo from "./BudgetInfo";

function Buttons({
  budgetArray,
  setSingleBudgetObject,
  tableToggle,
  setEditInfoState,
}) {
  const [newBudgetArray, setNewBudgetArray] = React.useState(budgetArray);
  //   const [showTable, setShowTable] = React.useState(false);

  React.useEffect(() => {
    setNewBudgetArray(budgetArray);
    console.log(budgetArray);

    return () => console.log("Bye bye eeh");
  }, [budgetArray]);

  console.log("buttons**", newBudgetArray);

  return (
    <div className="button__container">
      {newBudgetArray.map((singleMonth) => (
        <>
          <BudgetInfo
            setSingleBudgetObject={setSingleBudgetObject}
            monthInfo={singleMonth}
            tableToggle={tableToggle}
            setEditInfoState={setEditInfoState}
          />
        </>
      ))}
    </div>
  );
}

export default Buttons;
