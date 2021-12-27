import React from 'react'

const JsxEx = () => {
    // return (
    //     <div id="conatiner">
    //         <h1 className="bold">Hello World</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'container'},
        React.createElement('h1', {className: 'bold'}, 'Hello World')
    )
}

export default JsxEx
