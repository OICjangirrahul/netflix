import { Children } from "react";
import { useState } from "react";

export default function Counter({children}){
    console.log('counter render')
    const [number, setNumber] = useState(0);
    function handleClick(e){
        e.stopPropagation();
        setNumber(number=>number + 1);
 
        console.log(number)
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>{children}</button>
        </>
    )
}