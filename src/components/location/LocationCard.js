import React from "react"
import "./Location.css"

export const LocationCard = ({location, employees, animals}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__employees">{employees.length} Employees</div>
        <div className="location__animals">{animals.length} Animals</div>
    </section>
)