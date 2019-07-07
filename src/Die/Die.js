import React from 'react'
import { Component } from 'react'
import './Die.css'

class Die extends Component {
    state = {value: 0}

    constructor(props) {
        super(props)
    }

    roll() {
        this.setState((state, props) => {
            const value = Math.floor(Math.random() * 6)

            props.action(value)

            return {
                value
            }
        })

    }
    
    render() {
        return (
            <button className="die" onClick={_ => this.roll()}>
                {this.state.value} / {String.fromCharCode(9856 + this.state.value)}
            </button>
        )
    }
}

export default Die