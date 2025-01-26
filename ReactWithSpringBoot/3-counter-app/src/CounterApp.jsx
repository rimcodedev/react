import { useState } from "react";

export const CounterApp = ( { value } )  => {
    const [counter, setCounter] = useState(value);
    const addCounter = () => setCounter(c => c + 1);

    return <>
        <h2>The counter value is { counter }</h2>
        <button onClick={ () => { addCounter() } }>Counter +1</button>
    </>   
}

