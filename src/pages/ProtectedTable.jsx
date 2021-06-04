import React from "react";
import { getData } from "../services/data.input";

import axios from "axios";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths";

function ProtectedTable(props) {
  console.log(props.user.budget);
  const { user } = props;
  const [budgetArray, setBudgetArray] = React.useState([]);

  React.useEffect(() => {
    // budgetData = {
    //   month,
    //   passive,
    //   active,
    //   otherIncome,
    //   fixed,
    //   variable,
    //   periodic,
    //   otherExpenses,
    // };
    getData()
      .then((res) => {
        console.log("response:****", res);
        setBudgetArray(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => console.log("Bye bye eeh");
  }, []);

  if (!user) {
    return;
  }
  const { username, budget } = user;
  //   const { income, expenses } = budget;
  //   const { passive, active, otherIncome } = income;
  //   const { fixed, variable, periodic, otherExpenses } = expenses;

  return (
    <div>
      {budgetArray.map((byMonth) => {
        const { month, expenses, income } = byMonth;
        const { active, passive, otherIncome } = income;
        const { fixed, variable, periodic, otherExpenses } = expenses;

        return (
          <section>
            <h3>{month}</h3>
            <span></span>
            <table striped bordered hover variant="dark">
              <colgroup span="4"></colgroup>
              <tr>
                <th> INCOMES </th>
                <th>Week 1</th>
                <th>Week 2</th>
                <th>Week 3</th>
                <th>Week 4</th>
              </tr>
              <tr>
                <td> ACTIVE </td>
                {active.map((singleActive) => (
                  <td> $ {singleActive}.00 </td>
                ))}
              </tr>
              <tr>
                <td> PASSIVE </td>
                {passive.map((singlePassive) => (
                  <td> $ {singlePassive}.00 </td>
                ))}
              </tr>
              <tr>
                <td> OTHER </td>
                {/* {otherIncome.map((singleOther) => (
                  <td> $ {singleOther}.00 </td>
                ))} */}
              </tr>
            </table>
            <table striped bordered hover variant="dark">
              <colgroup span="4"></colgroup>
              <tr>
                <th> EXPENSES </th>
                <th>Week 1</th>
                <th>Week 2</th>
                <th>Week 3</th>
                <th>Week 4</th>
              </tr>
              <tr>
                <td> FIXED </td>
                {fixed.map((singleFixed) => (
                  <td> $ {singleFixed}.00 </td>
                ))}
              </tr>
              <tr>
                <td> VARIABLE </td>
                {variable.map((singleVariable) => (
                  <td> $ {singleVariable}.00 </td>
                ))}
              </tr>
              <tr>
                <td> PERIODIC </td>
                {periodic.map((singlePeriodic) => (
                  <td> $ {singlePeriodic}.00 </td>
                ))}
              </tr>
              <tr>
                <td> OTHER </td>
                {/* {otherExpenses.map((singleOther) => (
                  <td> $ {singleOther}.00 </td>
                ))} */}
              </tr>
              <tr></tr>
              <tr></tr>
            </table>
          </section>
        );
      })}
    </div>
  );
}

export default ProtectedTable;
