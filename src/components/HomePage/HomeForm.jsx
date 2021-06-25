import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { sendData } from "../../services/data.input";
import NewMonthButton from "./NewMonthButton";

function HomeForm({ user }) {
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

  const [homeFormState, setHomeFormState] = React.useState(false);

  function formToggle() {
    !homeFormState ? setHomeFormState(true) : setHomeFormState(false);
  }

  const {
    month,
    passive,
    active,
    otherIncome,
    fixed,
    variable,
    periodic,
    otherExpenses,
  } = form;
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const data = {
      user,
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
      sendData(data).then((res) => {
        if (!res.status) {
          // unsuccessful signup
          console.error("data input was unsuccessful: ", res);
          return setError({
            message: "data input was unsuccessful! Please check the console.",
          });
        }
        formToggle();
        console.log("succesfully sent data to backend", res);
      });
    } else {
      return setError({
        message: "Empty input fields must be 0",
      });
    }
  }

  return (
    <div>
      <>
        {homeFormState ? (
          <>
            <Form className="home-form" onSubmit={handleFormSubmission}>
              <Form.Group controlId="formBasic">
                <Form.Label>Month</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: January"
                  name="month"
                  value={month}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  Enter the month you want to register.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Active Incomes</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $200.00"
                  name="active"
                  value={active}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  salaries, wages, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Passive Incomes</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $300.00 "
                  name="passive"
                  value={passive}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  interests, rents, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Other Incomes</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $150.00 "
                  name="otherIncome"
                  value={otherIncome}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  presents, gambling, etc.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasic">
                <Form.Label>Fixed Expenses</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $200.00"
                  name="fixed"
                  value={fixed}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  car payments, morgage, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Periodic Expenses</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $200.00"
                  name="periodic"
                  value={periodic}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">rent, food, etc.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Variable Expenses</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $300.00 "
                  name="variable"
                  value={variable}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  recreation, hobbies, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Other Expenses</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: $150.00 "
                  name="otherExpenses"
                  value={otherExpenses}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  gambling, charity donations, etc.
                </Form.Text>
              </Form.Group>
              {error && (
                <div className="error-block">
                  <p>There was an error submiting the form:</p>
                  <p>{error.message}</p>
                </div>
              )}

              <Button variant="outline-info" type="submit">
                Submit
              </Button>
              <Button onClick={() => formToggle()} variant="outline-danger">
                Close
              </Button>
            </Form>
          </>
        ) : (
          <>
            <NewMonthButton
              setHomeFormState={() => setHomeFormState()}
              homeFormState={homeFormState}
              formToggle={() => formToggle()}
              user={user}
            />
          </>
        )}
      </>
    </div>
  );
}

export default HomeForm;
