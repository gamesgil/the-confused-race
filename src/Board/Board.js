import React from 'react'
import { Component } from 'react';
import './Board.css'

class Board extends Component {
    state = {rows: 5, cols: 5, car: [0, 4]}

    constructor(props) {
        super(props)
    }

    render() {
        let board = ['11111', '10001', '10001', '10001', '10001']
        
        const rows = board.map((row, y) => {
            return (<tr key={y}>
                {row.split('').map((tile, x) => {
                    const key = `${x},${y}`
                    const classes = []

                    if (tile === '1') {
                        classes.push('active')

                        if (this.state.car[0] === x && this.state.car[1] === y) {
                            classes.push('car')
                        }
                    }

                    return (<td key={key} className={classes.join(' ')}> </td>)
                })}
                </tr>
            )
            
        })

        const body = (
            <tbody>
                {rows}
            </tbody>
        )

        


        return (
            <table>
                {body}
            </table>
        )
    }
}

export default Board;