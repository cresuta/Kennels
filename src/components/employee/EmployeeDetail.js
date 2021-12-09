import React, { useContext, useEffect, useState } from "react"
import "./Employee.css"
import { useParams, useNavigate } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeDetail = () => {
  const { getEmployeeById, fireEmployee } = useContext(EmployeeContext)
  const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	const navigate = useNavigate();

  const handleFire = () => {
    fireEmployee(employee.id)
    .then(() => {
      navigate("/employees")
    })
  }

  useEffect(() => {
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Store Location: {employee.location?.name}</div>
      <button onClick={handleFire}>Fire Employee</button>
      <button onClick={() => {navigate(`/employees/edit/${employee.id}`)}}>Edit</button>
    </section>
  )
}
