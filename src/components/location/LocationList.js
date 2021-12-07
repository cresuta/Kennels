import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useNavigate } from "react-router"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const {animals, getAnimals} = useContext(AnimalContext)
  const {employees, getEmployees} = useContext(EmployeeContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getAnimals()
    .then(getEmployees)
    .then(getLocations)
  }, [])


  return (
    <>
    <h2>Locations</h2>
    <button onClick={() => {navigate("create")}}>Add Location</button>
    <div className="locations">
      {
        locations.map(location => {
          const allAnimals = animals.map(a => a.locationId === location.id)
          const allEmployees = employees.map(e => e.locationId === location.id)
          return <LocationCard key={location.id} 
          location = {location}
          animals = {allAnimals}
          employees = {allEmployees}
          />
        })
      }
    </div>
    </>
  )
}