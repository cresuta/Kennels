import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location, animals, employees}) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <div className="location__employees">{employees.length} Employees</div>
        <div className="location__animals">{animals.length} Animals</div>
    </section>
)