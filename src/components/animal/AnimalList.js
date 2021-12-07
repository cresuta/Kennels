import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router"

export const AnimalList = ({history}) => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const navigate = useNavigate()


  //useEffect - reach out to the world for something
  useEffect(() => {
   getAnimals()
  }, [])


  return (
    <>
    <h2>Animals</h2>
    <button onClick={() => {navigate("/animals/create")}}>Make Reservation</button>
    <div className="animals">
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
    </>
  )
}
