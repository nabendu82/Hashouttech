import React from 'react'
import './stylesheets.css'
import styled from 'styled-components'

const parastyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const Wrapper = styled.div`
    padding: 4em;
    background-color: papayawhip;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const StyleSheets = () => {
    return (
        <Wrapper>
            <h1 className="primary">CSS StyleSheets</h1>
            <p className="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero ducimus suscipit doloremque ipsum soluta corrupti, tenetur repellendus amet labore atque distinctio, repudiandae illo eos modi impedit id adipisci ipsam.</p>
            <p style={parastyled}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius.</p>
            <p style={{ color: 'red', backgroundColor: 'lightgrey', fontWeight: 'bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur corporis ullam debitis reprehenderit necessitatibus dicta eaque nam, deleniti ex, veritatis, distinctio dolores hic deserunt numquam excepturi incidunt omnis nihil!</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    )
}

export default StyleSheets
