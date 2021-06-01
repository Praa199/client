import React from "react";

// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function ProtectedTable(props) {
  const { user } = props;

  if (!user) {
    return;
  }
  //   const { username, budget } = user;
  //   const { income, expenses } = budget;
  //   const { passive, active, otherIncome } = income;
  //   const { fixed, variable, periodic, otherExpenses } = expenses;

  return (
    <div>
      {/* <p>Income</p>
      <Table striped bordered hover variant="dark">
        <colgroup span="4"></colgroup>
        <tr>
          <th></th>
          <th>ACTIVE</th>
          <th>PASSIVE</th>
          <th>OTHER</th>
        </tr>
        <tr>
          <td>Week 1 </td>
          <td>{passive[0]}</td>
          <td>{active[0]}</td>
          <td>{otherIncome[0]}</td>
        </tr>
        <tr>
          <td>Week 2 </td>
          <td>{passive[1]}</td>
          <td>{active[1]}</td>
          <td>{otherIncome[1]}</td>
        </tr>
        <tr>
          <td>Week 3 </td>
          <td>{passive[2]}</td>
          <td>{active[2]}</td>
          <td>{otherIncome[2]}</td>
        </tr>
        <tr>
          <td>Week 4 </td>
          <td>{passive[3]}</td>
          <td>{active[3]}</td>
          <td>{otherIncome[3]}</td>
        </tr>
      </Table>

      <Table striped bordered hover variant="dark">
        <p>Expenses</p>
        <colgroup span="4"></colgroup>
        <tr>
          <th>FIXED</th>
          <th>VARIABLE</th>
          <th>PERIODIC</th>
          <th>OTHER</th>
        </tr>
        <tr>
          <td>Week 1 </td>
          <td>{fixed[0]}</td>
          <td>{variable[0]}</td>
          <td>{periodic[0]}</td>
          <td>{otherExpenses[0]}</td>
        </tr>
        <tr>
          <td>Week 2 </td>
          <td>{fixed[1]}</td>
          <td>{variable[1]}</td>
          <td>{periodic[1]}</td>
          <td>{otherExpenses[1]}</td>
        </tr>
        <tr>
          <td>Week 3 </td>
          <td>{fixed[2]}</td>
          <td>{variable[2]}</td>
          <td>{periodic[2]}</td>
          <td>{otherExpenses[2]}</td>
        </tr>
        <tr>
          <td>Week 4 </td>
          <td>{fixed[3]}</td>
          <td>{variable[3]}</td>
          <td>{periodic[3]}</td>
          <td>{otherExpenses[3]}</td>
        </tr>
      </Table> */}
      {/* <p>Table with colgroup</p>
      <table>
        <colgroup span="4"></colgroup>
        <tr>
          <th>Countries</th>
          <th>Capitals</th>
          <th>Population</th>
          <th>Language</th>
        </tr>
        <tr>
          <td>USA</td>
          <td>Washington, D.C.</td>
          <td>309 million</td>
          <td>English</td>
        </tr>
        <tr>
          <td>Sweden</td>
          <td>Stockholm</td>
          <td>9 million</td>
          <td>Swedish</td>
        </tr>
      </table>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        flat button
      </Button> */}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProtectedTable;
