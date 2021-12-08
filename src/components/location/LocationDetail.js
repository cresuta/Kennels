import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)
 
	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
   getLocationById(locationId)
    .then((response) => {
        console.log(response)
      setLocation(response)
    })
    }, [])

  return (
    <>
    <section className="location">
      <h2 className="location__name">{location.name}</h2>
      <div className="location__address">{location.address}</div>
      <h3 className="employees">Employees</h3>
      <div className="employee__names">
        {location.employees?.map(employeeObj => <p key={employeeObj.id}>{employeeObj.name}</p>)}
      </div>
      <h3 className="animals">Current Residents</h3>
      <div className="animal__names"> 
        {location.animals?.map(animalObj => <p key={animalObj.id}>{animalObj.name}</p>)}
      </div>
    </section>
    </>
  )
}
