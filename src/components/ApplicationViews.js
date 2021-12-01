import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { Location } from "./location/Location"
import {Customer} from "./customer/Customer"
import {Employee} from "./employee/Employee"

export const ApplicationViews = () => {
    return (
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route path="/" element={<Home />} />
             {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="animals/*" element={<AnimalCard />} />
            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="locations/*" element={<Location/>} />
            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="customers/*" element={<Customer />} />
            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="employees/*" element={<Employee />} />
        </Routes>
    )
}

