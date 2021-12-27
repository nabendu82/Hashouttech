import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <>
                <h3>Welcome {this.props.name}</h3>
                <p>{this.props.children}</p>
            </>
        )
    }
}

export default Welcome
