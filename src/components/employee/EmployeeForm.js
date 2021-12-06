import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"
import { useNavigate } from 'react-router-dom';
import { CustomerCard } from "../customer/CustomerCard"

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0
    });

    const navigate = useNavigate();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getLocations()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEmployee = { ...employee }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = event.target.value
      // update state
      setEmployee(newEmployee)
    }

    const handleClickSaveAnimal = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const locationId = parseInt(employee.locationId)

      employee.locationId = locationId
    
      if (locationId === 0) {
        window.alert("Please select a location")
      } else {
        //invoke addAnimal passing animal as an argument.
        //once complete, change the url and display the animal list
        addEmployee(employee)
        .then(() => navigate("/employees"))
      }
    }

    return (
      <form className="animalForm">
          <h2 className="animalForm__title">New Animal</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Animal name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select onChange={handleControlledInputChange} defaultValue={animal.locationId} name="locationId" id="locationId" className="form-control" >
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
                  <label htmlFor="customerId">Customer: </label>
                  <select onChange={handleControlledInputChange} defaultValue={animal.customerId} name="customer" id="customerId" className="form-control" >
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
            onClick={handleClickSaveAnimal}>
            Save Animal
          </button>
      </form>
    )
}
