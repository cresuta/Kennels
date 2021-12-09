import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"
import { useNavigate } from "react-router"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers()
  }, [])


  return (
    <>
    <h2>Customers</h2>
    <button onClick={() => {navigate("/customers/create")}}>Add Customer</button>
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
    </>
  )
}