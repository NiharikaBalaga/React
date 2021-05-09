import React, { Component } from "react";

const employeecontext = React.createContext();
export class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: 101,
      Name: "Prem",
      Location: "Chennai",
      Salary: 150000,
    };
  }

  changeData=()=>{
      this.setState({
          Id:102
      })
  }
  render() {
    return (
      <div>
        <h1>Welcome to App Component</h1>
        <p>
          <label>
            Employee ID:<b>{this.state.Id}</b>
          </label>
        </p>
        {/* <Employee></Employee> */}
        <employeecontext.Provider value={this.state}>
          <Employee></Employee>
        </employeecontext.Provider>
        <button onClick={this.changeData}>Update</button>
      </div>
    );
  }
}

class Employee extends Component {
  static contextType = employeecontext;
  render() {
    return (
      <div>
        <h1>Welcome to Employee Component</h1>
        <p>
          <label>
          {/* Employee ID:<b>{this.state.Id}</b> */}
            Employee Id:<b>{this.context.Id}</b>
          </label><br></br>
          <label>Employee Salary:<b>{this.context.Salary}</b></label>
        </p>
        <Salary></Salary>
      </div>
    );
  }
}

class Salary extends Component {
  static contextType = employeecontext;
  render() {
    return (
      <div>
        <h1>Welcome to Salary Component</h1>
        <p>
          <label>
          {/* Employee ID:<b>{this.state.Id}</b> */}
            Employee Id:<b>{this.context.Id}</b>
          </label>
        </p>
      </div>
    );
  }
}

export default Context;
