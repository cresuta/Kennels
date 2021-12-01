import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
// import { Location } from "./location/Location"
// import {Customer} from "./customer/Customer"
// import {Employee} from "./employee/Employee"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = () => {
    return (
        <AnimalProvider>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route path="/" element={<Home />} />
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="animals/*" element={<AnimalList />} />
            </Routes>
        </AnimalProvider>
    )
}

