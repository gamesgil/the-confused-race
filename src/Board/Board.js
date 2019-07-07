import React from 'react'
import { Component } from 'react';
import './Board.css'

class Board extends Component {
    state = {
        boardSize: [5, 5],
        path: [
            [0, 4], [0, 3], [0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
        ], 
        playerPos: 0
    }

    constructor(props) {
        super(props)
    }

    moveToNext() {
        this.setState({playerPos: this.state.playerPos < this.state.path.length - 1 ? this.state.playerPos + 1 : this.state.playerPos - 1})
    }

    render() {
        const rows = Array(this.state.boardSize[1]).fill(0).map((row, y) => {
            return (<tr key={y}>
                {Array(this.state.boardSize[0]).fill(0).map((tile, x) => {
                    const key = `${x},${y}`
                    const classes = []

                    if (this.state.path.find(val => val[0] === x && val[1] === y)) {
                        classes.push('active')

                        if (this.state.path[this.state.playerPos][0] === x && this.state.path[this.state.playerPos][1] === y) {
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