import React from 'react'
import { Component } from 'react'
import './Die.css'

class Die extends Component {
    state = {value: 0}

    roll() {
        this.setState({value: Math.floor(Math.random() * 6)})
    }
    
    render() {
        return (
            <button className="die" onClick={_ => this.roll()}>
                {String.fromCharCode(9856 + this.state.value)}
            </button>
        )
    }
}

export default Die