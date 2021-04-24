import React, { Component } from "react";

class EmployeeClass extends Component {
// constructor(props){
//     super(props);
//     console.log(props);
//     this.props.Name="Technologies"
// }
  render() {
    return (
      <div>
        <h1>Employee Details using Class Functiom...</h1>
        <p>
          <label>
            Employee ID: <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Name: <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Location: <b>{this.props.Location}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Salary: <b>{this.props.Salary}</b>
          </label>
        </p>
        <Department
          deptName={this.props.deptName}
          headName={this.props.headName}
        ></Department>
      </div>

    )
  }
}
 
  class Department extends Component{
    render(){
    return (
      <div>
        <p>
          Dept Name: <b>{this.props.deptName}</b>
        </p>
        <p>
          Dept Name: <b> {this.props.headName}</b>
        </p>
  
      </div>
    );
    }
}
  
export default EmployeeClass

