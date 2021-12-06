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
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = () => {
    return (
        <AnimalProvider>
            <LocationProvider>
                <EmployeeProvider>
                    <CustomerProvider>
                        <Routes>               
                            <Route path="/" element={<Home />} />                    
                            <Route path="animals/*" element={<AnimalList />} />
                            <Route path="animals/create/*" element={<AnimalForm />} />
                            <Route path="locations/*" element={<LocationList />} />
                            
                            <Route path="employees/*" element={<EmployeeList />} />
                           
                            <Route path="customers/*" element={<CustomerList />} />
                        </Routes>
                    </CustomerProvider>
                </EmployeeProvider>
            </LocationProvider>
        </AnimalProvider>
    )
}

