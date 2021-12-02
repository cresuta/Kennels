import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
// import { Location } from "./location/Location"
// import {Customer} from "./customer/Customer"
// import {Employee} from "./employee/Employee"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import {LocationProvider} from "./location/LocationProvider"
import {LocationList} from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <AnimalProvider>
            <LocationProvider>
                <Routes>
                    {/* Render the location list when http://localhost:3000/ */}
                    <Route path="/" element={<Home />} />
                    {/* Render the animal list when http://localhost:3000/animals */}
                    <Route path="animals/*" element={<AnimalList />} />
                    {/* Render the location list when http://localhost:3000/locations */}
                    <Route path="locations/*" element={<LocationList />} />
                </Routes>
            </LocationProvider>
        </AnimalProvider>
    )
}

