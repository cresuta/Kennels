import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useParams, useNavigate } from "react-router-dom"

export const CustomerDetail = () => {
  const { getCustomerById, removeCustomer } = useContext(CustomerContext)
  const [customer, setCustomer] = useState({})

	const {customerId} = useParams();
	const navigate = useNavigate();

  const handleRemove = () => {
    removeCustomer(customer.id)
    .then(() => {
      navigate("/customers")
    })
  }

  useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
    .then((response) => {
      setCustomer(response)
    })
    }, [])

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">Address: {customer.address}</div>
      <div className="customer__email">Email: {customer.email}</div>
      <h3 className="animals">Animals Owned</h3>
      <div className="animal__names"> 
        {customer.animals?.map(animalObj => <p key={animalObj.id}>{animalObj.name}</p>)}
      </div>
      <button onClick={handleRemove}>Remove Customer</button>
      <button onClick={() => {navigate(`/customers/edit/${customer.id}`)}}>Edit</button>
    </section>

  )
}
