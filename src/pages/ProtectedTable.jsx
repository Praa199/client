import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths";

const datasArray = [
  {
    month: "june",
    income: {
      passive: [5, 6],
      active: [5, 7],
      otherIncome: [5, 8],
    },
    expenses: {
      fixed: [5, 4],
      variable: [5, 3],
      periodic: [5, 2],
      otherExpenses: [5, 1],
    },
  },
  {
    month: "july",
    income: {
      passive: [54, 11],
      active: [55, 22],
      otherIncome: [56, 33],
    },
    expenses: {
      fixed: [51, 44],
      variable: [52, 55],
      periodic: [53, 66],
      otherExpenses: [59, 77],
    },
  },
  {
    month: "august",
    income: {
      passive: [15, 16],
      active: [25, 88],
      otherIncome: [35, 99],
    },
    expenses: {
      fixed: [45, 135],
      variable: [55, 123],
      periodic: [65, 25],
      otherExpenses: [75, 55],
    },
  },
];

// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";

function ProtectedTable(props) {
  console.log(props.user);
  const { user } = props;
  const [budgetArray, setBudgetArray] = React.useState([]);

  React.useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/api/movies`)
    //   .then((response) => {
    //     console.log("response:", response);
    //     setListOfMovies(response.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // return () => console.log("Bye bye eeh");

    console.log("WE CAN RUN SOME CODE HERE, COMPONENT WAS `mounted`");
    setBudgetArray(datasArray);
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
      <p>{budgetArray.month}</p>
      {budgetArray.map((byMonth) => {
        const { month, expenses, income } = byMonth;
        const { active, passive, otherIncome } = income;
        const { fixed, variable, periodic, otherExpenses } = expenses;

        console.log("byMonth****", income);
        return (
          <section>
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
                {otherIncome.map((singleOther) => (
                  <td> $ {singleOther}.00 </td>
                ))}
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
                {otherExpenses.map((singleOther) => (
                  <td> $ {singleOther}.00 </td>
                ))}
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
