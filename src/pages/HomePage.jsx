import logo from "../logo.svg";
import "../App.css";
import { Button, Form } from "react-bootstrap";

function HomePage(props) {
  console.log("props.user***", props);
  return (
    <div className="App">
      <header className="App-header">
        {props.user ? (
          <>
            <h1>Hey, I'm logged in</h1>
            <h1>Hello {props.user.username}, welcome back </h1>

            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>Month</Form.Label>
                <Form.Control type="text" placeholder="Ex: January" />
                <Form.Text className="text-muted">
                  Enter tha month you want to register.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Active Incomes</Form.Label>
                <Form.Control type="number" placeholder="Ex: $200.00" />
                <Form.Text className="text-muted">
                  Here you enter salaries, wages, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Passive Incomes</Form.Label>
                <Form.Control type="number" placeholder="Ex: $300.00 " />
                <Form.Text className="text-muted">
                  Here you enter interests, rents, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Other Incomes</Form.Label>
                <Form.Control type="number" placeholder="Ex: $150.00 " />
                <Form.Text className="text-muted">
                  Here you enter presents, gambling, etc.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>Fixed Expenses</Form.Label>
                <Form.Control type="number" placeholder="Ex: $200.00" />
                <Form.Text className="text-muted">
                  Here you enter car payments, morgage, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Periodic Expenses</Form.Label>
                <Form.Control type="number" placeholder="Ex: $200.00" />
                <Form.Text className="text-muted">
                  Here you enter rent, food, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Variable Expenses</Form.Label>
                <Form.Control type="number" placeholder="Ex: $300.00 " />
                <Form.Text className="text-muted">
                  Here you enter recreation, hobbies, etc.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Other Expenses</Form.Label>
                <Form.Control type="number" placeholder="Ex: $150.00 " />
                <Form.Text className="text-muted">
                  Here you enter gambling, charity donations etc.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <button>one button</button>
            <button>another button</button>
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
