import React from "react";
import { getData } from "../services/data.input";
import Table from "../components/Table/Table";
import Buttons from "../components/Table/Buttons";
import { Route } from "react-router-dom";

// import axios from "axios";
// import { Link } from "react-router-dom";
// import * as PATHS from "../utils/paths";

function ProtectedTable(props) {
  const { user } = props;
  const [budgetArray, setBudgetArray] = React.useState([]);

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

  function handleDelete(id) {
    // axios.post(...)
    let items = budgetArray.filter((item) => item.id !== id);
    setBudgetArray({ items });
  }

  return (
    <>
      <Buttons budgetArray={budgetArray} handleDelete={handleDelete} />
      {/* <button onClick={buttonsToggle}>Click here to fetch your data</button>
      {showButtons && <Buttons budgetArray={budgetArray} />} */}
      {/* <Route exact path="/protected/table/:id" component={Table} /> */}
    </>
  );
}

export default ProtectedTable;
