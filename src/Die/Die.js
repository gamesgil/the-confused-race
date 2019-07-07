import React from 'react'
import { Component } from 'react'
import './Die.css'

class Die extends Component {
    state = {value: 0, busy: false}

    isBusy = false

    constructor(props) {
        super(props)
    }

    roll() {
        console.log(this.state.busy)
        if (!this.state.busy) {
            this.setState((state, props) => {
                const value = Math.floor(Math.random() * 6)
    
                props.action(value)
    
                return {
                    value
                }
            })
        }
    }

    componentDidUpdate(a, b) {
        console.log(a, b, this.isBusy)

        if (this.isBusy !== this.state.busy) {
            this.setState({busy: this.isBusy})
        }
    }
    
    busy() {
       this.isBusy = true
    }
    
    ready() {
        this.isBusy = false

        this.setState({})
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