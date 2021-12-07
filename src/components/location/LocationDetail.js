import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const { locations, getLocations, getLocationById } = useContext(LocationContext)
  const {employees, getEmployees} = useContext(EmployeeContext)
  const {animals, getAnimals} = useContext(AnimalContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    getAnimals()
    .then(getEmployees)
    .then(getLocationById(locationId))
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <>
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <h2 className="employees">Employees</h2>
      <div>
          {
              locations.map(location => {
                const allEmployees = employees.filter(e => e.locationId === location.id)
              })
            
          }
      </div>
      <h2 className="animals">Current Residents</h2>
      <div>
          {
              locations.map(location => {
                const allAnimals = animals.filter(a => a.locationId === location.id)
            })
            
          }
      </div>
    </section>
    </>
  )
}
