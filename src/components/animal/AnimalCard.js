import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/detail/${animal.id}`}>
                {animal.name}
            </Link>
        </h3>
       <div className="animal__breed">{animal.breed}</div>
    </section>
)
 