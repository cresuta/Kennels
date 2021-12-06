import React from "react"
import "./Animal.css"

export const AnimalCard = ({animal,customer,location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="location__address">Location: {location.name}</address>
        <h4 className="customer__name">Customer: {customer.name}</h4>
    </section>
)
 