import React from "react";

//function DisplayEmployeeInfo(employee) {
var DisplayEmployeeInfo = (employee) => {
  return (   
    <div>      
      <h1>Employee Details...</h1>
      <p>
        <label>
          Employee ID: <b>{employee.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name: <b>{employee.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Location: <b>{employee.Location}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary: <b>{employee.Salary}</b>
        </label>
      </p>
      <Department deptName={employee.deptName} headName={employee.headName}></Department>
    </div>
  );
};

const Department = (deptInfo) => {
  return (
    <div>
      <p>
        Dept Name: <b>{deptInfo.deptName}</b>
      </p>
      <p>
        Dept HeadName: <b> {deptInfo.headName}</b>
      </p>

    </div>
  );
};

export default DisplayEmployeeInfo;


