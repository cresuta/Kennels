import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="location__name">Store Location: {employee.location.name}</address>
    </section>
)
 