import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import {LocationProvider} from "./location/LocationProvider"
import {LocationList} from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = () => {
    return (
        <AnimalProvider>
            <LocationProvider>
                <EmployeeProvider>
                    <CustomerProvider>
                        <Routes>
                            {/* Render the location list when http://localhost:3000/ */}
                            <Route path="/" element={<Home />} />
                            {/* Render the animal list when http://localhost:3000/animals */}
                            <Route path="animals/*" element={<AnimalList />} />
                            {/* Render the location list when http://localhost:3000/locations */}
                            <Route path="locations/*" element={<LocationList />} />
                            {/* Render the employee list when http://localhost:3000/locations */}
                            <Route path="employees/*" element={<EmployeeList />} />
                            {/* Render the customer list when http://localhost:3000/customers */}
                            <Route path="customers/*" element={<CustomerList />} />
                        </Routes>
                    </CustomerProvider>
                </EmployeeProvider>
            </LocationProvider>
        </AnimalProvider>
    )
}

