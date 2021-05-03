import React, { Component } from "react";

export class EmployeeSalary extends Component {
  constructor(props) {
    super(props);
    this.state={
        updateSalary:null
    };
  }
 getUpdatedSalary=(salary)=>{
     this.setState({updateSalary:salary});
 }
  
  render() {
    return (
      <div>
        <h1>Employee Component...</h1>
        <p>
          <label>
            Id : <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Name : <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Location : <b>{this.props.Location}</b>
          </label>
        </p>
        <p>
          <label>
            Total Salary : <b>{this.props.Salary}</b>
          </label>
        </p>
        <p>
            <label>
                Updated Total Salary: <b>{this.state.updateSalary}</b></label>
        </p>
        <Salary
          BasicSalary={this.props.BasicSalary}
          HRA={this.props.HRA}
          SpecialAllowance={this.props.SpecialAllowance}
          onSalaryChanged={this.getUpdatedSalary}
        ></Salary>
        
      </div>
    );
  }
}

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.BasicSalary,
      hra: this.props.HRA,
      sa: this.props.SpecialAllowance,
    };
  }

  updateSalary=()=>{
    let salary=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)
    +parseInt(this.refs.sa.value);
    this.props.onSalaryChanged(salary);
  }
  render() {
    return (
      <div>
        <h1>Salary Details...</h1>
        <p>
          <label>
            Basic Salary :
            <input
              type="text"
              defaultValue={this.state.basic}
              ref="basic"
            />
          </label>
        </p>
        <p>
          <label>
            HRA : <input type="text" defaultValue={this.state.hra} ref="hra" />
          </label>
        </p>
        <p>
          <label>
            Special Allowance :{" "}
            <input
              type="text"
              defaultValue={this.state.sa}
              ref="sa"
            />
          </label>
        </p>
        <button onClick={this.updateSalary}>Update</button>
      </div>
    );
  }
}

export default EmployeeSalary;
