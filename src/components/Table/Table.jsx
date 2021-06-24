import React from "react";
import DeleteInfo from "../Table/DeleteInfo";
import EditBudgetButton from "./EditBudgetButton";
import "./Table.css";

function Table({
  singleMonthData,
  tableToggle,
  setBudgetArray,
  budgetArray,
  editTableToggle,
}) {
  const { month, expenses, income, _id } = singleMonthData;
  const { passive, active, otherIncome } = income;
  const { fixed, otherExpenses, periodic, variable } = expenses;

  console.log("Table**", singleMonthData);

  function getTotalCosts(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  return (
    <>
      <h1>{month}</h1>
      <span></span>
      <section className="table__container">
        <div className="income_container">
          <table
            className="table__income"
            striped
            bordered
            hover
            variant="dark"
          >
            <colgroup span="4"></colgroup>
            <tr>
              <th className="th__green"> INCOMES </th>
            </tr>
            <tr>
              <td className="td__green"> ACTIVE </td>
              <td className="td__white"> $ {active}.00 </td>
            </tr>
            <tr>
              <td className="td__green"> PASSIVE </td>
              <td className="td__white"> $ {passive}.00 </td>
            </tr>
            <tr>
              <td className="td__green"> OTHER </td>
              <td className="td__white"> $ {otherIncome}.00 </td>
            </tr>
            <tr>
              <td className="td__green"> TOTAL </td>
              <td> </td>
              <td className="td__white"> $ {getTotalCosts(income)}.00 </td>
              <td> </td>

              <td> </td>
              <td> </td>
            </tr>
          </table>
        </div>
        <div className="expenses_container">
          <table
            className="table__expenses"
            striped
            bordered
            hover
            variant="dark"
          >
            <colgroup span="4"></colgroup>
            <tr>
              <th className="th__red"> EXPENSES </th>
            </tr>
            <tr>
              <td className="td__red"> FIXED </td>
              <td className="td__white"> $ {fixed}.00 </td>
            </tr>
            <tr>
              <td className="td__red"> VARIABLE </td>
              <td className="td__white"> $ {variable}.00 </td>
            </tr>
            <tr>
              <td className="td__red"> PERIODIC </td>
              <td className="td__white"> $ {periodic}.00 </td>
            </tr>
            <tr>
              <td className="td__red"> OTHER </td>
              <td className="td__white"> $ {otherExpenses}.00 </td>
            </tr>
            <tr>
              <td className="td__red"> TOTAL </td>
              <td> </td>
              <td className="td__white"> $ {getTotalCosts(expenses)}.00 </td>
              <td> </td>

              <td> </td>
              <td> </td>
            </tr>
            <tr></tr>
            <tr></tr>
          </table>
        </div>
        <div className="difference_container">
          <table
            className="table__difference"
            striped
            bordered
            hover
            variant="dark"
          >
            <colgroup span="4"></colgroup>
            <tr>
              <th> DIFERENCE </th>
            </tr>
            <tr>
              <td className="td__green"> Total Incomes </td>
              <td className="td__white">$ {getTotalCosts(income)}.00</td>
            </tr>
            <tr>
              <td className="td__red">Total Expenses </td>
              <td className="td__white">$ {getTotalCosts(expenses)}.00 </td>
            </tr>
            <tr>
              <td> Diference </td>
              <td className="td__white">
                $ {getTotalCosts(income) - getTotalCosts(expenses)}.00
              </td>

              {/* {       if( (getTotalCosts(income) - getTotalCosts(expenses)) >= 1){
return
 <td className="td__green" > Diference </td>
              <td> className="td__green"{getTotalCosts(income) - getTotalCosts(expenses)}</td>
              } else{
                return
                <td className="td__red" > Diference </td>
              <td className="td__red">{getTotalCosts(income) - getTotalCosts(expenses)}</td>
              }


}       */}
            </tr>
          </table>
        </div>
      </section>
      <span className="edit_remove_buttons_container">
        <EditBudgetButton
          tableToggle={() => tableToggle()}
          editTableToggle={() => editTableToggle()}
        />
        <DeleteInfo
          singleMonthId={_id}
          tableToggle={() => tableToggle()}
          setBudgetArray={setBudgetArray}
          budgetArray={budgetArray}
        />
      </span>
    </>
  );
}

export default Table;
