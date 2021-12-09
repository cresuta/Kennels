import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Customer.css"
import { useNavigate, useParams, } from 'react-router-dom';

export const CustomerForm = () => {
    const { addCustomer, getCustomerById, updateCustomer } = useContext(CustomerContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {customerId} = useParams();
    const navigate = useNavigate();

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newCustomer = { ...customer }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newCustomer[event.target.name] = event.target.value
      // update state
      setCustomer(newCustomer)
    }

    const handleSaveCustomer = () => {
      if (parseInt(customer.animalId) === 0 ) {
          window.alert("Please select an animal")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (customerId){
          //PUT - update
          updateCustomer({
              id: customer.id,
              name: customer.name,
              address: customer.address,
              email: customer.email,
              animalId: parseInt(customer.animalId)
          })
          .then(() => navigate(`/customers/detail/${customer.id}`))
        } else {
          //POST - add
          addCustomer({
            name: customer.name,
            address: customer.address,
            email: customer.email
          })
          .then(() => navigate("/customers"))
        }
      }
    }


    useEffect(() => {
      getAnimals().then(() => {
        if (customerId){
          getCustomerById(customerId)
          .then(customer => {
              setCustomer(customer)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="customerForm">
        <h2 className="customerForm__title">New Customer</h2>
        
        <fieldset>
          <div className="form-group">
            <label htmlFor="customerName">Name: </label>
            <input type="text" id="customerName" name="name" required autoFocus className="form-control"
            placeholder="Customer name"
            onChange={handleControlledInputChange}
            defaultValue={customer.name}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="customerAddress">Address: </label>
            <input type="text" id="customerAddress" name="address" required autoFocus className="form-control"
            placeholder="Customer address"
            onChange={handleControlledInputChange}
            defaultValue={customer.address}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="customerEmail">Email: </label>
            <input type="email" id="customerEmail" name="email" required autoFocus className="form-control"
            placeholder="Customer email"
            onChange={handleControlledInputChange}
            defaultValue={customer.email}/>
          </div>
        </fieldset>

        {/* <fieldset>
          <div className="form-group">
            <label htmlFor="animal">Assign to animal: </label>
            <select value={customer.animalId} name="animalId" id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select an animal</option>
              {animals.map(a => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset> */}

        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveCustomer()
          }}>
        {customerId ? <>Save Customer</> : <>Add Customer</>}</button>
      </form>
    )
}
