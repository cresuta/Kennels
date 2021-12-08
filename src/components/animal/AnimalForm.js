import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useNavigate, useParams, } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const [animal, setAnimal] = useState({
      name: "",
      breed: "",
      locationId: 0,
      customerId: 0
    });

    const [isLoading, setIsLoading] = useState(true);

    const {animalId} = useParams();
    const navigate = useNavigate();

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newAnimal = { ...animal }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newAnimal[event.target.id] = event.target.value
      // update state
      setAnimal(newAnimal)
    }

    const handleSaveAnimal = () => {
      if (parseInt(animal.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (animalId){
          //PUT - update
          updateAnimal({
              id: animal.id,
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => navigate(`/animals/detail/${animalId}`))
        } else {
          //POST - add
          addAnimal({
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => navigate("/animals"))
        }
      }
    }


    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId){
          getAnimalById(animalId)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalName">Animal name: </label>
            <input type="text" id="animalName" name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
            defaultValue={animal.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalBreed">Animal Breed: </label>
            <input type="text" id="animalBreed" name="breed" required autoFocus className="form-control"
            placeholder="Animal breed"
            onChange={handleControlledInputChange}
            defaultValue={animal.breed}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} name="locationId" id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customer">Customer: </label>
            <select value={animal.customerId} name="customerId" id="customerAnimal" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {animalId ? <>Save Animal</> : <>Add Animal</>}</button>
      </form>
    )
}
