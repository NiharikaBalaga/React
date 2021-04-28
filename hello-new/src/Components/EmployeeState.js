import React, { Component } from 'react'


export class EmployeeState extends Component {
    // counter=0;
    state={counter:0}
addEmployee= ()=>{
    this.setState({counter:this.state.counter+1})
    // this.counter=this.counter+1;
    // alert("Hey adding employee");
    // alert("Count is "+ this.counter)
}

    render() {
        return (
            <div>
                <h2>Welcome to Employee  Data</h2>
                <p>
                    <button onClick={this.addEmployee}>Add Employee</button>
                </p>
                <p>
                    <label>Add Employee count: <b>{this.state.counter}</b> </label>
                </p>
            </div>
        )
    }
}

export default EmployeeState
