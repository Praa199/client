import logo from "../logo.svg";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import React, { useState } from "react";
import { sendData } from "../services/data.input";

function HomePage(props) {
  const { user } = props;
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
        console.log("succesfully sent data to backend", res);
      });
    } else {
      return setError({
        message: "Empty input fields must be 0",
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {props.user ? (
          <>
            <h1>Hey {props.user.username}, be welcome</h1>
            <h3> Please provide with your data </h3>

            <Form onSubmit={handleFormSubmission}>
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
                  Enter tha month you want to register.
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
                  Here you enter salaries, wages, etc.
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
                  Here you enter interests, rents, etc.
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
                  Here you enter presents, gambling, etc.
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
                  Here you enter car payments, morgage, etc.
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
                <Form.Text className="text-muted">
                  Here you enter rent, food, etc.
                </Form.Text>
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
                  Here you enter recreation, hobbies, etc.
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
                  Here you enter gambling, charity donations, etc.
                </Form.Text>
              </Form.Group>
              {error && (
                <div className="error-block">
                  <p>There was an error submiting the form:</p>
                  <p>{error.message}</p>
                </div>
              )}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        ) : (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </>
        )}
      </header>
    </div>
  );
}

export default HomePage;
