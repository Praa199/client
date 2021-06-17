import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateData } from "../../services/data.input";

function EditInfo({
  singleMonthData,
  saveUpdatedInfo,
  //   handleUpdate,
  setBudgetArray,
  budgetArray,
}) {
  const [form, setForm] = useState({
    month: "",
    income: {
      passive: 0,
      active: 0,
      otherIncome: 0,
    },
    expenses: {
      fixed: 0,
      variable: 0,
      periodic: 0,
      otherExpenses: 0,
    },
  });
  const { month, expenses, income, _id } = singleMonthData;
  const { passive, active, otherIncome } = income;
  const { fixed, otherExpenses, periodic, variable } = expenses;
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const data = {
      month,
      passive,
      active,
      otherIncome,
      fixed,
      variable,
      periodic,
      otherExpenses,
    };
    if (
      month.length >= 3 &&
      passive >= 0 &&
      active >= 0 &&
      otherIncome >= 0 &&
      fixed >= 0 &&
      variable >= 0 &&
      periodic >= 0 &&
      otherExpenses >= 0
    ) {
      updateData(data).then((res) => {
        if (!res.status) {
          // unsuccessful signup
          console.error("data input was unsuccessful: ", res);
          return setError({
            message: "data input was unsuccessful! Please check the console.",
          });
        }
        console.log("succesfully sent data to backend", res);
      });
    } else {
      return setError({
        message: "Empty input fields must be 0",
      });
    }
  }

  //   function handleUpdate() {
  //     saveUpdatedInfo();
  //     console.log("updated");
  //   }
  return (
    <div>
      <h1>Table</h1>
      <Form onSubmit={handleFormSubmission}>
        <h3>
          {" "}
          <Form.Control
            type="text"
            name="month"
            value={month}
            onChange={handleInputChange}
          />
        </h3>
        <span></span>
        <table striped bordered hover variant="dark">
          <colgroup span="4"></colgroup>
          <tr>
            <th> INCOMES </th>
            <th>Monthly</th>
          </tr>
          <tr>
            <td> ACTIVE </td>
            <td>
              {" "}
              <Form.Control
                type="number"
                name="active"
                value={active}
                onChange={handleInputChange}
              />{" "}
            </td>
          </tr>
          <tr>
            <td> PASSIVE </td>
            <td>
              {" "}
              <Form.Control
                type="number"
                name="passive"
                value={passive}
                onChange={handleInputChange}
              />{" "}
            </td>
          </tr>
          <tr>
            <td> OTHER </td>
            <td>
              {" "}
              <Form.Control
                type="number"
                name="otherIncome"
                value={otherIncome}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>

            <td> </td>
            <td> </td>
          </tr>
        </table>
        <table striped bordered hover variant="dark">
          <colgroup span="4"></colgroup>
          <tr>
            <th> EXPENSES </th>
            <th>Monthly</th>
          </tr>
          <tr>
            <td> FIXED </td>
            <td>
              <Form.Control
                type="number"
                name="fixed"
                value={fixed}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td> VARIABLE </td>
            <td>
              {" "}
              <Form.Control
                type="number"
                name="variable"
                value={variable}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td> PERIODIC </td>
            <td>
              <Form.Control
                type="number"
                name="periodic"
                value={periodic}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td> OTHER </td>
            <td>
              {" "}
              <Form.Control
                type="number"
                name="otherExpenses"
                value={otherExpenses}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>

            <td> </td>
            <td> </td>
          </tr>
          <tr></tr>
          <tr></tr>
        </table>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditInfo;
