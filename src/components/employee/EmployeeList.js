import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useNavigate } from "react-router"


export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEmployees()
  }, [])


  return (
    <>
    <h2>Employees</h2>
    <button onClick={() => {navigate("/employees/create")}}>Add Employee</button>
    <div className="employees">
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee}/>
        })
      }
    </div>
    </>
  )
}