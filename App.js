import React from 'react'
import { createRoot } from "react-dom/client";
// const heading=React.createElement("h1",{},"My name is Shikha");
// const jsxHeading=<h1 id='heading'>My name is Shikha in jsx</h1>
const Title=()=>{
    return (
        <>
            <h1 className='heading'>I am in the Title</h1>
        </>
    )
}
const ReactComponent=()=>{
    return (
        <>
            <Title/>
            <Title></Title>
            {Title()}
            {30+40}
            <h1>My name is Shikha</h1>
            <h2>My name is Shikha</h2>
            <h3>My name is Shikha</h3>
            <h4>My name is Shikha</h4>
            <h5>My name is Shikha</h5>
            <h6>My name is Shikha</h6>
        </>
        
    )
}
const rootJSX=createRoot(document.getElementById("root"));
rootJSX.render(<ReactComponent/>)