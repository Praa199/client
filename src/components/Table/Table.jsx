import React from "react";

function Table({ singleMonthData }) {
  const { month, expenses, income } = singleMonthData;
  const { passive, active, otherIncome } = income;
  const { fixed, otherExpenses, periodic, variable } = expenses;

  console.log("Table**", income);
  //   const singleMonthDet = props.find(
  //     (singMonth) => singMonth._id === props.match.params.id
  //   );

  //   const [budgetObject, setBudgetObject] = React.useState(null);
  //   setBudgetObject(props.singleMonthData);

  //   React.useEffect(() => {
  //     setBudgetObject(props);
  //     console.log("Table**", props);

  //     return () => console.log("Bye bye eeh");
  //   }, []);

  //   const getTotalCosts = (item) => {
  //     return props.budgetObject.reduce((total, item) => {
  //       return total + Number(item.price);
  //     }, 0);
  //   };
  //find object method

  //   if (budgetObject) {
  //     console.log(budgetObject);

  return (
    <section>
      <h1>Table</h1>
      <h3>{month}</h3>
      <span></span>
      <table striped bordered hover variant="dark">
        <colgroup span="4"></colgroup>
        <tr>
          <th> INCOMES </th>
          <th>Monthly</th>
          {/* <th> SUBTOTAL </th> */}
        </tr>
        <tr>
          <td> ACTIVE </td>
          <td> $ {active}.00 </td>
          {/* <td> $ {getTotalCosts}.00 </td> */}
        </tr>
        <tr>
          <td> PASSIVE </td>
          <td> $ {passive}.00 </td>
          {/* <td> $ {getTotalCosts}.00 </td> */}
        </tr>
        <tr>
          <td> OTHER </td>
          <td> $ {otherIncome}.00 </td>
          {/* <td> $ {getTotalCosts}.00 </td> */}
        </tr>
        <tr>
          <td> TOTAL </td>
          <td> </td>
          <td> </td>

          <td> </td>
          <td> </td>
          {/* <td> $ {getTotalCosts}.00 </td> */}
        </tr>
      </table>
      <table striped bordered hover variant="dark">
        <colgroup span="4"></colgroup>
        <tr>
          <th> EXPENSES </th>
          <th>Monthly</th>
          {/* <th> SUBTOTAL </th> */}
        </tr>
        <tr>
          <td> FIXED </td>
          <td> $ {fixed}.00 </td>
        </tr>
        <tr>
          <td> VARIABLE </td>
          <td> $ {variable}.00 </td>
        </tr>
        <tr>
          <td> PERIODIC </td>
          <td> $ {periodic}.00 </td>
        </tr>
        <tr>
          <td> OTHER </td>
          <td> $ {otherExpenses}.00 </td>
        </tr>
        <tr>
          <td> TOTAL </td>
          <td> </td>
          <td> </td>

          <td> </td>
          <td> </td>
          {/* <td> $ {getTotalCosts}.00 </td> */}
        </tr>
        <tr></tr>
        <tr></tr>
      </table>
    </section>
  );
  //   );
  // }
}

export default Table;
