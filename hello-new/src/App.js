// import Employee from "./Components/Employee";
// import Employee1 from "./Components/EmployeeClass";
import EmployeeData from "./Components/EmployeeState"
import EmployeeDataCount from "./Components/CountCharacter"
import EmployeeSalary from "./Components/EmployeeSalary"
function App() {
  return (
    <div className="App">
      {/* <Employee Id="101" Name="Prem" Location="Chennai" Salary="12345" deptName="Company" headName="Srinivas"></Employee> */}
      {/* All properties what you send in react are "READ-ONLY" */}
      {/* <Employee1 Id="101" Name="Prem" Location="Chennai" Salary="12345" deptName="Company" headName="Srinivas"></Employee1> */}
      <EmployeeData/>
      <EmployeeDataCount/>
      <EmployeeSalary Employee Id="101" Name="Pragim" Location="Bangalore" Salary="50000" BasicSalary="25000" HRA="10000" SpecialAllowance="15000">
      </EmployeeSalary>
    </div>
    
  );
}

export default App;
