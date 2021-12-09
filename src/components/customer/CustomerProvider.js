import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const getCustomerById = (id) => {
        return fetch(`http://localhost:8088/customers/${id}?_embed=animals`)
            .then(res => res.json())
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    const removeCustomer = (id) => {
        return fetch(`http://localhost:8088/customers/${id}`, {
        method: "DELETE"
    })
        .then(getCustomers)
    }

    const updateCustomer = customer => {
        return fetch(`http://localhost:8088/customers/${customer.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(customer)
        })
          .then(getCustomers)
      }
    

    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer, getCustomerById, removeCustomer, updateCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}
