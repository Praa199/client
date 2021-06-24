import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateData } from "../../services/data.input";
import { useForm } from "react-hook-form";
import "./Table.css";

function EditInfo({
  singleMonthData,
  //   handleUpdate,
  setBudgetArray,
  budgetArray,
  editTableToggle,
}) {
  const { month, expenses, income, _id, user } = singleMonthData;
  const { passive, active, otherIncome } = income;
  const { fixed, otherExpenses, periodic, variable } = expenses;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    filterParentState(data);
    editTableToggle(data);
    console.log(budgetArray);

    data.id = _id;
    data.user = user;
    // console.log(data);
    if (
      data.month.length >= 3 &&
      data.passive >= 0 &&
      data.active >= 0 &&
      data.otherIncome >= 0 &&
      data.fixed >= 0 &&
      data.variable >= 0 &&
      data.periodic >= 0 &&
      data.otherExpenses >= 0
    ) {
      updateData(data).then((res) => {
        // console.log("submit update", data);
        if (!res.status) {
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
  };

  // function replaceValue(item) {}

  // obj.p2.p21.map((item) => replaceValue(item));

  function filterParentState(data) {
    budgetArray.map((singleMonth) => {
      if (singleMonth._id === _id) {
        singleMonth.month = data.month;
        singleMonth.passive = data.passive;
        singleMonth.active = data.active;
        singleMonth.otherIncome = data.otherIncome;
        singleMonth.fixed = data.fixed;
        singleMonth.variable = data.variable;
        singleMonth.periodic = data.periodic;
        singleMonth.otherExpenses = data.otherExpenses;
        console.log(singleMonth);
      }
    });
  }

  return (
    <div>
      <h1>Table</h1>
      <section className="edit__form__container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>
            {" "}
            <Form.Control defaultValue={month} {...register("month")} />
          </h3>
          <span></span>
          <table striped bordered hover variant="dark">
            <colgroup span="4"></colgroup>
            <tr>
              <th> INCOMES </th>
            </tr>
            <tr>
              <td> ACTIVE </td>
              <td>
                {" "}
                <Form.Control
                  defaultValue={active}
                  {...register("active")}
                />{" "}
              </td>
            </tr>
            <tr>
              <td> PASSIVE </td>
              <td>
                {" "}
                <Form.Control
                  defaultValue={passive}
                  {...register("passive")}
                />{" "}
              </td>
            </tr>
            <tr>
              <td> OTHER </td>
              <td>
                {" "}
                <Form.Control
                  defaultValue={otherIncome}
                  {...register("otherIncome")}
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
            </tr>
            <tr>
              <td> FIXED </td>
              <td>
                <Form.Control defaultValue={fixed} {...register("fixed")} />
              </td>
            </tr>
            <tr>
              <td> VARIABLE </td>
              <td>
                {" "}
                <Form.Control
                  defaultValue={variable}
                  {...register("variable")}
                />
              </td>
            </tr>
            <tr>
              <td> PERIODIC </td>
              <td>
                <Form.Control
                  defaultValue={periodic}
                  {...register("periodic")}
                />
              </td>
            </tr>
            <tr>
              <td> OTHER </td>
              <td>
                {" "}
                <Form.Control
                  defaultValue={otherExpenses}
                  {...register("otherExpenses")}
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

          <Button variant="outline-info" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default EditInfo;
