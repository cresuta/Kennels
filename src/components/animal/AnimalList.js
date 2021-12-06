import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import {CustomerContext} from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const {locations, getLocations} = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const navigate = useNavigate()


  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)

  }, [])


  return (
    <>
    <h2>Animals</h2>
    <button onClick={() => {navigate("create")}}>Add Animal</button>
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          const owner = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(l => l.id === animal.locationId)
          return <AnimalCard key={animal.id} 
          animal={animal}
          customer={owner}
          location={clinic} />
        })
      }
    </div>
    </>
  )
}
