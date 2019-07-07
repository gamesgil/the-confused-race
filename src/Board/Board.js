import React from "react";
import { Component } from "react";
import "./Board.css";

class Board extends Component {
  state = {
    boardSize: [5, 5],
    path: [
      [0, 4],
      [0, 3],
      [0, 2],
      [0, 1],
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4]
    ],
    playerPos: 0,
    hilite: []
  };

  constructor(props) {
    super(props);
  }

  hilite(posFromCurrent) {
    this.setState((state, props) => {
      const hilite = [];

      if (state.playerPos + posFromCurrent < state.path.length) {
        hilite.push(state.playerPos + posFromCurrent);
      }

      if (state.playerPos - posFromCurrent >= 0) {
        hilite.push(state.playerPos - posFromCurrent);
      }

      return {
          hilite
      }
    });
  }

  moveIfPossible(pos) {
      if (this.state.hilite.length === 0) {
          return
      }

      if (this.state.hilite[0] === pos || this.state.hilite[1] === pos) {
          this.moveTo(pos)

          this.setState({hilite: []})
          this.props.action()
      }
  }

  moveTo(pos) {
    this.setState((state, props) => {
        return {
            playerPos: pos
        }
    })
  }

  moveToNext() {
    this.setState({
      playerPos:
        this.state.playerPos < this.state.path.length - 1
          ? this.state.playerPos + 1
          : this.state.playerPos - 1
    });
  }

  render() {
    const rows = Array(this.state.boardSize[1])
      .fill(0)
      .map((row, y) => {
        return (
          <tr key={y}>
            {Array(this.state.boardSize[0])
              .fill(0)
              .map((tile, x) => {
                const key = `${x},${y}`;
                const classes = [];

                if (this.state.path.find(val => val[0] === x && val[1] === y)) {
                  classes.push("active");

                  if (
                    this.state.path[this.state.playerPos][0] === x &&
                    this.state.path[this.state.playerPos][1] === y
                  ) {
                    classes.push("car");
                  } else if (
                    (this.state.hilite.length > 0 &&
                      this.state.path[this.state.hilite[0]][0] === x &&
                      this.state.path[this.state.hilite[0]][1] === y) ||
                    (this.state.hilite.length > 1 &&
                      this.state.path[this.state.hilite[1]][0] === x &&
                      this.state.path[this.state.hilite[1]][1] === y)
                  ) {
                      console.log('match')
                    classes.push("hilite");
                  }
                }

                return (
                  <td key={key} className={classes.join(" ")} onClick={_ => 
                      this.moveIfPossible(this.state.path.findIndex(pos => pos[0] === x && pos[1] === y))
                    }>

                    {" "}
                  </td>
                );
              })}
          </tr>
        );
      });

    const body = <tbody>{rows}</tbody>;

    return <table>{body}</table>;
  }
}

export default Board;
