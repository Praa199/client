import React from "react";
import { getData } from "../services/data.input";
import Table from "../components/Table/Table";
import Buttons from "../components/Table/Buttons";
import EditInfo from "../components/Table/EditInfo";

// import axios from "axios";
// import { Link } from "react-router-dom";
// import * as PATHS from "../utils/paths";

function ProtectedTable(props) {
  const { user } = props;
  const [budgetArray, setBudgetArray] = React.useState([]);
  const [tableState, setTableState] = React.useState(false);
  const [editInfoState, setEditInfoState] = React.useState(false);
  const [singleBudgetObject, setSingleBudgetObject] = React.useState();

  // export function removeSingleMonth(params) {}
  // const [showButtons, setShowButtons] = React.useState(false);

  // function buttonsToggle() {
  //   setShowButtons(!showButtons);
  // }

  React.useEffect(() => {
    getData(user._id)
      .then((res) => {
        console.log("response:****", res);
        setBudgetArray(res.data);
      })
      .catch((err) => {
        console.error("response.err:****", err);
      });
    return () => console.log("Bye bye eeh");
  }, []);

  if (!user) {
    return;
  }

  function tableToggle() {
    !tableState
      ? setTableState(true) && setEditInfoState(false)
      : setTableState(false) && setEditInfoState(false);
  }

  function editTableToggle() {
    !editInfoState
      ? setEditInfoState(true) && setTableState(false)
      : setEditInfoState(false) && setTableState(false);

    console.log("this button edits the table");
  }

  return (
    <div>
      <h1>Months</h1>
      <Buttons
        budgetArray={budgetArray}
        setSingleBudgetObject={setSingleBudgetObject}
        tableToggle={tableToggle}
        setEditInfoState={() => setEditInfoState(false)}
      />
      <>
        {tableState && (
          <Table
            singleMonthData={singleBudgetObject}
            tableToggle={() => tableToggle()}
            setBudgetArray={setBudgetArray}
            budgetArray={budgetArray}
            editTableToggle={() => editTableToggle()}
          />
        )}
        {editInfoState && (
          <EditInfo
            singleMonthData={singleBudgetObject}
            setBudgetArray={setBudgetArray}
            budgetArray={budgetArray}
            editTableToggle={() => editTableToggle()}
          />
        )}
      </>
    </div>
  );
}

export default ProtectedTable;
