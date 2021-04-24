import Employee from './Components/Employee'
import Employee1 from './Components/EmployeeClass'
function App() {
  return (
    <div className="App">
      <Employee Id="101" Name="Prem" Location="Chennai" Salary="12345" deptName="Company" headName="Srinivas"></Employee>
{/* All properties what you send in react are "READ-ONLY" */}
      <Employee1 Id="101" Name="Prem" Location="Chennai" Salary="12345" deptName="Company" headName="Srinivas"></Employee1>
    </div>
  );
}

export default App;
