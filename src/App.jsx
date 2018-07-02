import React from 'react'
const {hello} = require('bindings')('hello.node')

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'No message'
        }
    }

    onClick() {
        this.setState({
            message: hello()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>Click me!</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}