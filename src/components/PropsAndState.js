import React, {useState} from "react";

export const PropsAndState = ({yourName}) => {
    let [countClicks, setCountClicks] = useState(0);

    const handleClick = () => {
        // make a copy of state, modify it, and then setState to the copy 
        const newCountClicks = ++countClicks;
        setCountClicks(newCountClicks);
    }

    return (
        <>
            <h3>Welcome, {yourName}!</h3>
            <p>Total clicks: {countClicks}</p>
            <button onClick={(handleClick)}>Click Me</button>
        </>
    )
}