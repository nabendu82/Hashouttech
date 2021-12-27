import React from 'react'

const Greeting = (props) => {
    console.log(props);

    return (
        <>
            <h1>Hello {props.name}</h1>
            <p>{props.children}</p>
        </>
    )
}

export default Greeting
